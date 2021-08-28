const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user-routes");
const thoughtRoute = require("./routes/thought-routes");

const app = express();
const PORT = process.env.PORT || 3001;

// middle ware 
app.use(express.json()); // parse post reqwust 
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));




mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/social-netboi", {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.set("debug", true);



// routes 

app.use("/api/users", userRoute);

app.use("/api/thought", thoughtRoute);

app.listen(PORT, () => 
console.log(`Now listening on ${PORT}` ))