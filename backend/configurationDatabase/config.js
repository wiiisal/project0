const mysql=require("mysql2")
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"wissal1111",
    database:"project"
})
connection.connect((err)=>err?console.log(err)
:console.log("database project0 connected"))
module.exports={connection}