
const express=require("express");
const exhbs=require("express-handlebars");

port=9999;



const app = express()
app.engine('handlebars',exhbs.engine())
app.set('view engine','handlebars')

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.set('views','./views');

const main =require('./routes/main.js')
const user =require('./routes/user.js')

app.use(express.static('static'))
app.use("/static", express.static('public'))

app.use("/",main);
app.use("/user",user);
app.use("*",(req,res)=>{
res.render("notfound")
})



app.listen(port,(err)=>{

    console.log(`${port}`)
});