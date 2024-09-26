const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require('method-override');

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true})); //for parsing the form data
app.set("view engine","ejs");
app.set('views',path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'delta_app',
    password:'vIjaY143#&$KhuShi10@',
});
let createRandomUser = ()=> {
    return[
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password()
    ];
  }

// //INSERTING NEW DATA

//  let q = "INSERT INTO user (id,username,email,password) VALUES ?";
// let data = [];
// for(let i =1;i<=100;i++){
//     data.push(createRandomUser());
// }

app.get("/",(req,res)=>{
    let q="SELECT COUNT(*) FROM user";
    try{
        connection.query(q,(err,result)=>{
        if(err) throw err;
       let count = result[0]["COUNT(*)"];
        res.render("home",{count});
    })

        }catch(err){
           console.log(err);
           res.send("Some error in Database")
            }
})

//SHOW ROUTES 
app.get("/user",(req,res)=>{
    let q = "SELECT * FROM user";
    try{
        connection.query(q,(err,users)=>{
            if(err) throw err;
            res.render("showuser",{users});
        })
    }catch{

    }
})

//Edit route
app.get("/user/:id/edit",(req,res)=>{
    let {id}= req.params;
    let q=`SELECT *FROM user WHERE id='${id}'`; //'' for value not a sting
    try{
        connection.query(q,(err,result)=>{
        if(err) throw err;
        let user= result[0];
        res.render("edit",{user});
    })

        }catch(err){
           console.log(err);
           res.send("Some error in Database")
            }
})

//UPDATE route
app.patch("/user/:id",(req,res)=>{
    let {id}= req.params;
    let{password:formPass,username: newUsername}=req.body;
    let q=`SELECT *FROM user WHERE id='${id}'`; //'' for value not a sting
    try{
        connection.query(q,(err,result)=>{
        if(err) throw err;
        let user= result[0];
        if(formPass != user.password){//Authentication layer
            res.send("Password is incorrect");
        }else{
            let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
            connection.query(q2,(err,result)=>{
                if(err) throw err;
                res.redirect("/user");
            });
        }
      
    })

        }catch(err){
           console.log(err);
           res.send("Some error in Database")
            }
})
 


app.listen("8080",()=>{
    console.log("server is running on port 8080");
})




  