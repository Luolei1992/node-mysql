const mysql = require('mysql')
//创建连接对象
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'luolei1992',
    port:'3306',
    database:'myblog'
})
//开始连接
con.connect()

//执行sql语句
// const sql = 'select * from manger;'
// const sql = `update users set username='luolei' where username='zhangsan';`
const sql = "insert into users (username,`password`,realname) values ('zhangsan','123','张三');"
con.query(sql,(err,result)=>{
    if(err){
        console.error(err)
        return
    }
    console.log(result)
})

//断开连接
con.end()