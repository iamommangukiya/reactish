const db=require("./db.js")
const express =require("express");
const cors = require("cors");
const app= express();
const port= 8000;
app.use(cors())
app.use(express.json())
app.post(
    "/createuser",(req,res)=>{
        var data=req.body
        var que =`INSERT INTO tbl_user ( Email,uname, Password) VALUES ( '${data. email}', '${data.uname}','${data.password}');
        `
      
        var  result = db.query(que,(err,data)=>{
            if (err) {
                res.status(400).send("error")
                
            }
            else{
               
                res.status(200).send("Account Created")
            }

        })
    
        console.log(res)
    }
)
app.listen(port)