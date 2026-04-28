param(
  [int]$Port = 8080,
  [string]$Root = "."
)

$ErrorActionPreference = "Stop"

$rootPath = (Resolve-Path $Root).Path
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, $Port)
$listener.Start()

Write-Output "Serving $rootPath at http://127.0.0.1:$Port/"

$contentTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".svg"  = "image/svg+xml"
  ".ico"  = "image/x-icon"
}

function Get-ContentType([string]$path) {
  $ext = [System.IO.Path]::GetExtension($path).ToLowerInvariant()
  if ($contentTypes.ContainsKey($ext)) { return $contentTypes[$ext] }
  return "application/octet-stream"
}

function Get-ResponseBytes([string]$requestPath) {
  if ([string]::IsNullOrWhiteSpace($requestPath) -or $requestPath -eq "/") {
    $requestPath = "/index.html"
  }

  $relativePath = [System.Uri]::UnescapeDataString($requestPath.TrimStart("/")) -replace "/", "\"
  $filePath = Join-Path $rootPath $relativePath

  if ((Test-Path $filePath) -and (Get-Item $filePath).PSIsContainer) {
    $filePath = Join-Path $filePath "index.html"
  }

  if (-not (Test-Path $filePath)) {
    $body = [System.Text.Encoding]::UTF8.GetBytes("Not Found")
    return @{
      Status = "404 Not Found"
      Type = "text/plain; charset=utf-8"
      Body = $body
    }
  }

  return @{
    Status = "200 OK"
    Type = Get-ContentType $filePath
    Body = [System.IO.File]::ReadAllBytes($filePath)
  }
}

while ($true) {
  $client = $listener.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::ASCII, $false, 1024, $true)
    $requestLine = $reader.ReadLine()
    if ([string]::IsNullOrWhiteSpace($requestLine)) {
      $client.Close()
      continue
    }

    $parts = $requestLine.Split(" ")
    $path = if ($parts.Length -ge 2) { $parts[1] } else { "/" }

    while ($true) {
      $line = $reader.ReadLine()
      if ([string]::IsNullOrEmpty($line)) { break }
    }

    $response = Get-ResponseBytes $path
    $header = "HTTP/1.1 $($response.Status)`r`nContent-Type: $($response.Type)`r`nContent-Length: $($response.Body.Length)`r`nConnection: close`r`n`r`n"
    $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
    $stream.Write($headerBytes, 0, $headerBytes.Length)
    $stream.Write($response.Body, 0, $response.Body.Length)
    $stream.Flush()
    $client.Close()
  } catch {
    try { $client.Close() } catch {}
  }
}
