
const express = require('express');
 const app = express();
 const bodyParser= require('body-parser');
 app.use(bodyParser.urlencoded({ extended: false })); 

 app.get('/', (req,res)=>{
    res.sendFile('exam.html');
 })
  //multiplication
 app.post('/multiplication' , (req,res)=>{
 let num1= parseInt(req.params.num1);
 let num2= parseInt(req.params.num2);
 let product= num1*num2;
 res.send(product);
})

   



 //subtract
app.post('/subtract' , (req,res)=>{
    let num1= parseInt(req.params.num1);
    let num2= parseInt(req.params.num2);
    let diff=num1-num2;

res.send(diff);
})
  






//addition
app.post('/add' , (req,res)=>{
let num1= parseInt(req.params.num1);
 let num2=parseInt(req.params.num2);
 let sum= num1+num2;
 res.send(sum);
})





//division
 app.post('/divide' , (req,res)=>{
    let num1= parseInt(req.params.num1);
 let num2=parseInt(req.params.num2);
 let division= (num1)/(num2);
 res.send(division);
})        











  app.listen(5600, () => { console.log(`Calculator app listening at port 5600`); }); 