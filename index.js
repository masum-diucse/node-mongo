const express = require('express');
const cors = require('cors')
var bodyParser = require('body-parser')
const app = express();
app.use(cors());
app.use(bodyParser.json())
const fruits={
    product:"Banana"
}
const users=["Asad","based","Kashed","Rashed","Nashed"];

app.get('/',(req,res)=>res.send(fruits));

app.get('/fruits/banana',(req,res)=>{
    res.send({fruit:"pineapple",quantity:100,price:10000});
})

app.get('/users/:id',(req,res)=>{
    const userId=req.params.id;
    const name=users[userId];
   res.send({userId,name});
   console.log(req.params);
   console.log(req.query.search);
})

//post
app.post('/addUser',(req,res)=>{
    const user=req.body;
    user.id=55;
    res.send(user);
});

app.listen(3000,()=>console.log("listening from 3000 port"));
