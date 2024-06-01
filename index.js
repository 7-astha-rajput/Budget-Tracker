var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()
app.use(bodyParser.json())
app.use(express.static("public"))
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://localhost:27017')
var db = mongoose.connection
db.on('error',() => console.log("Error in connecting to database"))
db.once('open',()=> console.log("Connected to Database"))

app.post("/add", (req,res) =>{
    var type_select = req.body.type_select
    var amount_input= req.body.amount_input
    var description = req.body.description
    var date_input = req.body.date_input

    var data={
        "Type": type_select,
        "Amount" : amount_input,
        "Info": description,
        "Date": date_input
    }
    db.collection('users').insertOne(data, (err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully")

    })
})
app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('index.html')
}).listen(5000)

console.log("listennin on port 5000") 