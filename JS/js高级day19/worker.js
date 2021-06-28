console.log("分线程我来了");

//监听其他线程传输过来的数据,this代表当前的线程
this.onmessage=function(e){
    console.log(e);
    var sum=0;
    for(var i=0;i<e.data;i++){
        sum+=Math.sqrt(i);
    }

    //结果执行完成,给主线程发送信息
    postMessage(sum);

    //关闭分线程本身
    close();
}