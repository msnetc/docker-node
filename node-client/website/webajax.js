/**
 * nodejs向apache发送请求，接收响应后返回到浏览器端
 */
app.get('/nodeReq', function(req,res,next){
    var data = {
        age: 20,
        name: "cici",
        like: "shopping"
    };
    data = require('querystring').stringify(data); //数据以url param格式发送
    data = JSON.stringify(data); //数据以json格式发送
    console.log(data);
    var opt = {
        method: "POST",
        host: "localhost",
        port: 8012,
        path: "/php/get_data.php",
        headers:{
            //"Content-Type": "application/x-www-form-urlencoded", //for url parameter
            "Content-Type": "application/json", // for json data
            "Content-Length": data.length
        }
    };

    var req = http.request(opt, function(apacheRes){//建立连接 和 响应回调
        if(apacheRes.statusCode == 200){
            apacheRes.setEncoding('utf8');
            var body = "";
            apacheRes.on('data', function(recData){ body += recData;});
            apacheRes.on('end', function(){ res.send(body); /*发送收到的响应*/ });
        }else{
            res.send(500, "error");
        }
    });
    req.write(data + "\n"); //发送请求
    req.end(); //请求发送完毕
});