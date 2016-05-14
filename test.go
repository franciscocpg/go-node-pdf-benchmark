package main

import (
	"os/exec"
        "net/http"
	"io/ioutil"
)

func handle(w http.ResponseWriter, r *http.Request) {
	// converts "hello.html" file to "hello.pdf"
	exec.Command("./wkhtmltopdf", "hello.html", "hello.pdf").Run()
	b,_ := ioutil.ReadFile("hello.pdf")
	 w.Write(b)
}

 func main() {
        http.HandleFunc("/", handle)
        http.ListenAndServe(":8080", nil)
    }

