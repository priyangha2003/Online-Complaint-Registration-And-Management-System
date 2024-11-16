const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Saktheesh:Sakthee123@cluster0.qdjlr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
   console.log("connected to mongodb")
})

