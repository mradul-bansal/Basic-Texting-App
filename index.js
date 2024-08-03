const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js")


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main().then(() => { 
    console.log("Connected to MongoDB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}

let chat1 = new Chat({
    from: "neha",
    to: "Priya",
    message: "Send me your exam sheets",
    created_at: new Date(),
});

chat1.save().then((res) => {
    console.log(res);
});

app.get("/", (req, res) => {
    res.send("Working")
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
