$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8000/")
try {
    $listener.Start()
    Write-Host "Server started successfully on http://localhost:8000/"
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/") { $urlPath = "/index.html" }
        
        # Strip leading slash for Join-Path
        $relPath = $urlPath.TrimStart('/')
        $filePath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine((pwd).Path, $relPath))
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            
            $contentType = "text/plain"
            if ($ext -eq ".html") { $contentType = "text/html; charset=utf-8" }
            elseif ($ext -eq ".css") { $contentType = "text/css; charset=utf-8" }
            elseif ($ext -eq ".js") { $contentType = "application/javascript; charset=utf-8" }
            elseif ($ext -eq ".png") { $contentType = "image/png" }
            elseif ($ext -eq ".svg") { $contentType = "image/svg+xml" }
            elseif ($ext -eq ".jpeg" -or $ext -eq ".jpg") { $contentType = "image/jpeg" }
            elseif ($ext -eq ".pdf") { $contentType = "application/pdf" }
            
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("File Not Found: $urlPath")
            $response.ContentType = "text/plain; charset=utf-8"
            $response.ContentLength64 = $errBytes.Length
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.Close()
    }
} catch {
    Write-Error $_.Exception.Message
} finally {
    $listener.Close()
}
