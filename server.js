const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// middle ware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/social-netboi", {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.set("debug", true);


app.get("/" ,(req,res) => {
    res.json("hello")
})

app.listen(PORT, () => 
console.log(`Now listening on ${PORT}` ))