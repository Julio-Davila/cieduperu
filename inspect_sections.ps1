$html = [System.IO.File]::ReadAllText("C:\Users\Pc_Personal\.gemini\antigravity\scratch\ciedu-peru-web\original.html", [System.Text.Encoding]::UTF8)

# Let's inspect sections
$sections = [regex]::Matches($html, '<section[^>]*>([\s\S]*?)</section>')
Write-Output "Sections count: $($sections.Count)"

# Let's see general paragraphs and content
$pMatches = [regex]::Matches($html, '<p[^>]*>([\s\S]*?)</p>')
foreach ($p in $pMatches) {
    $txt = ($p.Groups[1].Value -replace '<[^>]+>', ' ').Trim()
    $txt = [System.Text.RegularExpressions.Regex]::Replace($txt, '\s+', ' ')
    if ($txt.Length -gt 25) {
        Write-Output "P: $txt`n"
    }
}
