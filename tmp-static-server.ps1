param([string]$Root,[string]$Prefix)
Add-Type -AssemblyName System.Web
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add($Prefix)
$listener.Start()
while ($listener.IsListening) {
  try {
    $context = $listener.GetContext()
    $path = $context.Request.Url.AbsolutePath.TrimStart('/')
    if ([string]::IsNullOrWhiteSpace($path)) { $path = 'index.html' }
    $file = Join-Path $Root $path
    if (Test-Path $file -PathType Leaf) {
      $bytes = [System.IO.File]::ReadAllBytes($file)
      switch ([System.IO.Path]::GetExtension($file).ToLower()) {
        '.html' { $context.Response.ContentType = 'text/html; charset=utf-8' }
        '.css' { $context.Response.ContentType = 'text/css; charset=utf-8' }
        '.js' { $context.Response.ContentType = 'application/javascript; charset=utf-8' }
        '.png' { $context.Response.ContentType = 'image/png' }
        '.jpg' { $context.Response.ContentType = 'image/jpeg' }
        '.jpeg' { $context.Response.ContentType = 'image/jpeg' }
        default { $context.Response.ContentType = 'application/octet-stream' }
      }
      $context.Response.ContentLength64 = $bytes.Length
      $context.Response.OutputStream.Write($bytes,0,$bytes.Length)
    } else {
      $context.Response.StatusCode = 404
    }
    $context.Response.OutputStream.Close()
  } catch {}
}
