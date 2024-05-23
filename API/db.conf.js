const mysql=require("mysql");

const conn=mysql.createConnection({
host:'localhost',
user:'mysql',
password:'mysql@123',
database:'UItoUx'


});

module.exports=conn;