Add-Type -AssemblyName System.Web

$url = 'https://cieduperu.com/'
$wc = New-Object System.Net.WebClient
$wc.Encoding = [System.Text.Encoding]::UTF8
$wc.Headers.Add('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)')

try {
    $html = $wc.DownloadString($url)
    [System.IO.File]::WriteAllText("C:\Users\Pc_Personal\.gemini\antigravity\scratch\ciedu-peru-web\original.html", $html, [System.Text.Encoding]::UTF8)
    Write-Output "Downloaded $($html.Length) bytes."
    
    # Extract nav / menu items
    $menuMatches = [regex]::Matches($html, '<li[^>]*class="[^"]*menu-item[^"]*"[^>]*>[\s\S]*?<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)</a>')
    Write-Output "=== MENU ITEMS ==="
    foreach ($m in $menuMatches) {
        $link = $m.Groups[1].Value
        $txt = ($m.Groups[2].Value -replace '<[^>]+>', '').Trim()
        Write-Output "$txt -> $link"
    }

    # Extract headings
    $hMatches = [regex]::Matches($html, '<(h[1-6])[^>]*>([\s\S]*?)</\1>')
    Write-Output "=== HEADINGS ==="
    foreach ($m in $hMatches) {
        $tag = $m.Groups[1].Value
        $txt = ($m.Groups[2].Value -replace '<[^>]+>', '').Trim()
        if ($txt) {
            Write-Output "[$tag] $txt"
        }
    }

    # Extract phone, email, address, social links
    Write-Output "=== CONTACT & SOCIAL ==="
    $contacts = [regex]::Matches($html, '(wa\.me[^\s"''<>]+|whatsapp[^\s"''<>]+|facebook\.com[^\s"''<>]+|instagram\.com[^\s"''<>]+|mailto:[^\s"''<>]+|\+?51[\s\d-]{8,15}|info@[^\s"''<>]+|contacto@[^\s"''<>]+)')
    foreach ($c in $contacts) {
        Write-Output $c.Value
    }
} catch {
    Write-Output "Error: $_"
}
