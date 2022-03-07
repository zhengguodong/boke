let express=require('express')
let app=express();
let bodyParser = require('body-parser')
let mysql=require("mysql")
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
let server = require('http').createServer(app);
let options ={
    host:'localhost',
    port:'3306',//可选，默认就是3306
    user:'root',
    password:'19991008',
    database:'test'
}
let con =mysql.createConnection(options);
//建立连接
con.connect((err)=>{
    //如果连接失败
    if(err){
        console.log(err,"连接失败")
    } else{
        console.log("数据库连接成功")
    }
})
app.post('/getmsg',(req,res)=>{
    let sql=`select * from bj`
   con.query(sql,(error,results)=>{
       if(error){
           console.log("error!");
           throw error;
       }
       res.send(results)
   })
})
app.post('/writebk',(req,res)=>{
    let sql=`insert into bj (title,date,content,label) values ('${req.body.title}','${req.body.date}','${req.body.content}','${req.body.label}')`
   con.query(sql,(error,results)=>{
       if(error){
           console.log("error!");
           throw error;
       }
       res.send(results)
   })
})
// 修改博客
app.post('/editbk',(req,res)=>{
    let sql=`update bj set content='${req.body.content}' where id=${req.body.id}`;
    con.query(sql,(err,results)=>{
        if(err){
            console.log("error!");
            throw err;
        }
        res.send(results)
    })

})
app.post('/getpart1',(req,res)=>{
    let sql='select * from case1'
   con.query(sql,(error,results)=>{
       if(error){
           console.log("error!");
           throw error;
       }
       res.send(results)
   })
})
app.post('/getpart2',(req,res)=>{
    let sql=`select * from bj`
   con.query(sql,(error,results)=>{
       if(error){
           console.log("error!");
           throw error;
       }
       res.send(results)
   })
})
server.listen(4000,()=>{
    console.log("server is running");
    
})
