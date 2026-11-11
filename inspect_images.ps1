$html = [System.IO.File]::ReadAllText("C:\Users\Pc_Personal\.gemini\antigravity\scratch\ciedu-peru-web\original.html", [System.Text.Encoding]::UTF8)

$imgMatches = [regex]::Matches($html, '<img[^>]+src=["'']([^"'']+)["''][^>]*>')
Write-Output "Images found: $($imgMatches.Count)"
$uniqueImgs = @()
foreach ($img in $imgMatches) {
    $src = $img.Groups[1].Value
    if ($src -notmatch 'wp-content/plugins|wp-includes') {
        $uniqueImgs += $src
    }
}
$uniqueImgs | Select-Object -Unique | ForEach-Object { Write-Output $_ }
