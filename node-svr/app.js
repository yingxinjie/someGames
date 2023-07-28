var ws = require("nodejs-websocket");

console.log("开始创建websocket");
ws.createServer(function (conn) {
    console.log("连接成功");
    conn.on("text", function (obj) {
        console.log("接收:", obj);
        conn.send("服务端给客户端返回一条数据 原始客户端数据:"+obj);
    })
    conn.on("close", function (code, reason) {
        console.log("关闭连接")
    });
    conn.on("error", function (code, reason) {
        console.log("异常关闭")
    });
}).listen(8001,()=>{
    console.log("成功")
})
