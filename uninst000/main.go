package main

import (
	"flag"
	"fmt"
	"net/http"
	"os/exec"
)

// 定义启动参数
var port = flag.String("port", "2333", "端口")
var pwd = flag.String("pwd", "123456", "关机密码")

// 主方法
func main() {
	mux := http.NewServeMux()
	// 设置访问的路由,用于关机
	mux.HandleFunc("/shutdown", shutdown)
	// 设置访问的路由,用于测试服务是否运行
	mux.HandleFunc("/", test)
	// 解析启动参数
	flag.Parse()
	// 打印服务请求地址
	printAddress(*port, *pwd)
	// 设置监听的端口
	err := http.ListenAndServe(":"+*port, mux)
	if err != nil {
		fmt.Println("服务启动失败，请检查端口是否被占用！")
	}
}

// 该方法用于关机
func shutdown(w http.ResponseWriter, r *http.Request) {
	// 打印请求日志
	fmt.Println("收到请求:", r.URL.Path)
	// 解析请求参数
	r.ParseForm()
	// 校验密码
	if r.Form.Get("pwd") == *pwd {
		// 执行关机命令（仅适用于Windows）
		cmd := exec.Command("cmd", "/C", "shutdown -s -t 3")
		cmd.Dir = "C:/Windows/System32"
		err := cmd.Run()
		fmt.Println(err)
		// 将执行信息返回给页面
		w.Write([]byte("成功"))
	} else {
		// 将执行信息返回给页面
		w.Write([]byte("密码错误"))
	}
}

// 该方法用于测试服务是否运行
func test(w http.ResponseWriter, r *http.Request) {
	// 打印请求日志
	fmt.Println("收到请求:", r.URL.Path)
	// 将执行信息返回给页面
	w.Write([]byte("服务正在运行"))
}

// 该方法用于执行命令（无回显）
func cmd(w http.ResponseWriter, r *http.Request) {
	// 打印请求日志
	fmt.Println("收到请求:", r.URL.Path)
	// 解析请求参数
	r.ParseForm()
	cmd := exec.Command("cmd", "/C", r.Form.Get("cmd"))
	cmd.Dir = "C:/Windows/System32"
	err := cmd.Run()
	fmt.Println(err)
	// 将执行信息返回给页面
	w.Write([]byte("成功"))
}

// 打印服务请求地址
func printAddress(port string, pwd string) {
	fmt.Println("-------------------------------------------------------")
	fmt.Println("服务测试：http://localhost:" + port + "/")
	fmt.Println("立即关机：http://localhost:" + port + "/shutdown?pwd=" + pwd)
	fmt.Println("-------------------------------------------------------")
	fmt.Println("服务正在运行......")
}
