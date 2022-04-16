@echo off
::切换到当前文件所在目录
cd %~p0 /D
echo.
echo ----------------------------What do you want to do?----------------------------
echo.
echo 1. Build With GUI
echo 2. Build Without GUI
echo 3. Build Chat Server With GUI
echo 4. Build Chat Client With GUI
echo.
echo.
echo What do you want to do? Enter the number.
set /p num=
if "%num%"=="1" (
::构建exe文件
go build -o unitst000.exe .\main.go
)

if "%num%"=="2" (
::构建exe文件
go build -ldflags "-H=windowsgui" -o unitst000.exe .\main.go
)

if "%num%"=="3" (
::构建exe文件
go build -o chat_server.exe .\chat.server.go
)

if "%num%"=="4" (
::构建exe文件
go build -o chat_client.exe .\chat.client.go
)