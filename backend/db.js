const db =require("mysql")
const mysql= db.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"demo"
});
mysql.connect((error)=>{
     if(error){
        console.log("error")
     }
})
module.exports=mysql