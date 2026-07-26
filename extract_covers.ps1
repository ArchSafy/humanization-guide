# extract_covers.ps1
# Script to natively extract the first page of each PDF reference to a PNG image using Windows Runtime

# Ensure UWP/WinRT type metadata is loaded
[void][Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]
[void][Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType=WindowsRuntime]
[void][Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage, ContentType=WindowsRuntime]
[void][Windows.Data.Pdf.PdfPageRenderOptions, Windows.Data, ContentType=WindowsRuntime]
[void][Windows.Storage.Streams.DataReader, Windows.Storage, ContentType=WindowsRuntime]

# Load the WindowsRuntime assembly to support UWP async operations in .NET Task
[void][System.Reflection.Assembly]::Load("System.Runtime.WindowsRuntime, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089")

$refrancesDir = Join-Path (Get-Location).Path "Refrances"
$outputDir = Join-Path (Get-Location).Path "assets\covers"

# Create output folder if it doesn't exist
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
    Write-Host "Created output directory: $outputDir"
}

# Reflection lookups for WinRT Task extensions
$asTaskGeneric = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq "AsTask" -and $_.IsGenericMethod } | Select-Object -First 1
$asTaskAction = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq "AsTask" -and -not $_.IsGenericMethod -and $_.GetParameters()[0].ParameterType.FullName.StartsWith("Windows.Foundation.IAsyncAction") } | Select-Object -First 1

$pdfFiles = Get-ChildItem -Path $refrancesDir -Filter "*.pdf"
Write-Host "Found $($pdfFiles.Count) PDF files to process."

foreach ($pdf in $pdfFiles) {
    $pdfPath = $pdf.FullName
    $pngName = $pdf.BaseName + ".png"
    $pngPath = Join-Path $outputDir $pngName

    Write-Host "Processing: $($pdf.Name) -> $pngName..."
    
    try {
        # 1. Get UWP StorageFile
        $fileOp = [Windows.Storage.StorageFile]::GetFileFromPathAsync($pdfPath)
        $fileTask = $asTaskGeneric.MakeGenericMethod([Windows.Storage.StorageFile]).Invoke($null, @($fileOp))
        $fileTask.Wait()
        $file = $fileTask.Result

        # 2. Load PDF Document
        $docOp = [Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file)
        $docTask = $asTaskGeneric.MakeGenericMethod([Windows.Data.Pdf.PdfDocument]).Invoke($null, @($docOp))
        $docTask.Wait()
        $doc = $docTask.Result

        if ($doc.PageCount -eq 0) {
            Write-Warning "PDF has 0 pages: $($pdf.Name)"
            continue
        }

        # 3. Get first page (index 0)
        $page = $doc.GetPage(0)

        # 4. Create Stream
        $stream = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream
        
        # 5. Render options
        $options = New-Object Windows.Data.Pdf.PdfPageRenderOptions
        $options.DestinationWidth = 400
        
        # 6. Render page to stream
        $renderOp = $page.RenderToStreamAsync($stream, $options)
        $renderTask = $asTaskAction.Invoke($null, @($renderOp))
        $renderTask.Wait()

        # 7. Read bytes from stream using DataReader
        $stream.Seek(0)
        $reader = New-Object Windows.Storage.Streams.DataReader($stream)
        
        $loadOp = $reader.LoadAsync($stream.Size)
        $loadTask = $asTaskGeneric.MakeGenericMethod([uint32]).Invoke($null, @($loadOp))
        $loadTask.Wait()
        
        $bytes = New-Object byte[]($stream.Size)
        $reader.ReadBytes($bytes)

        # 8. Save to PNG
        [System.IO.File]::WriteAllBytes($pngPath, $bytes)

        # Clean up
        $reader.Dispose()
        $stream.Dispose()
        $page.Dispose()

        Write-Host "Successfully generated cover: $pngPath" -ForegroundColor Green
    }
    catch {
        Write-Error "Error processing $($pdf.Name): $_"
    }
}

Write-Host "Done processing all files!" -ForegroundColor Cyan
