# windows下node作为consumer使用mesher连接java的provider服务
第一 配置mesher
     可参考https://support.huaweicloud.com/bestpractice-servicestage/servicestage_bestpractice_0048.html
     conf/chassis.yaml的listenAddress改为注册中心的地址。   
     microservice.yaml中的APPLICATION_ID最好和provider的APPLICATION_ID相同。

     运行mesher
     mesher-1.3.3-windows-amd64\start.bat

第二：配置provider
     打开java-provider\src\main\resources\microservice.yaml
     配置service.registry.address改为注册中心的地址。  

      运行provider
      1.cd java-provider; mvn clean package
      2.cd target ; java -jar demo-0.0.1-SNAPSHOT.jar
    
第二：配置node
      打开node-client/website/server.js
      1.修改端口号为Mesh监听端口30101
      2.将原来的IP:Port替换为http://微服务名/请求路径, 如本例的路径为http://HelloServiceComb/hello'

      运行node
      1. cd node-client\website 
         npm install --registry=https://registry.npm.taobao.org
      2. node server.js
      3. curl http://localhost 返回"hello world"

linux下运行：
 准备条件：有docker,docker-compose 环境

 1.执行 docker-compose up， 运行node和mesher

 2.curl http://localhost:8888, 校验是否返回 返回"hello world"

发现问题：

  当容器运行时，mesher-linux/conf中的app_id被自动清空，导致访问微服务失败。
  error:lb: FindMicroServiceInstances failed, ProviderID: HelloServic
                    eComb, err: FindMicroServiceInstances failed, appID/MicroServ
                    iceName/version: default/HelloServiceComb/0+, response Status
                    Code: 400, respon...