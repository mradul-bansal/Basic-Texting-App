const mongoose = require("mongoose");
const Chat = require("./models/chat.js")



main().then(() => { 
    console.log("Connected to MongoDB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}

let allChats = [
    {
        "from": "rahul",
        "to": "Amit",
        "message": "Can you share the project files?",
        "created_at": new Date()
    },
    {
        "from": "sneha",
        "to": "Maya",
        "message": "Please send me the meeting notes",
        "created_at": new Date()
    },
    {
        "from": "Rohan",
        "to": "Anjali",
        "message": "Forward me the research paper",
        "created_at": new Date()
    },
    {
        "from": "Vikas",
        "to": "Ankit",
        "message": "Send over the sales report",
        "created_at": new Date()
    },
    {
        "from": "Preeti",
        "to": "Neha",
        "message": "Can you email me the slides?",
        "created_at": new Date()
    },
    {
        "from": "Aman",
        "to": "Priya",
        "message": "Please share the code repository",
        "created_at": new Date()
    },
    {
        "from": "Ritu",
        "to": "Sanjay",
        "message": "Send me the budget details",
        "created_at": new Date()
    },
    {
        "from": "Arjun",
        "to": "Simran",
        "message": "Forward me the client list",
        "created_at": new Date()
    },
    {
        "from": "Shreya",
        "to": "Ravi",
        "message": "Please send the event schedule",
        "created_at": new Date()
    },
    {
        "from": "Gaurav",
        "to": "Vivek",
        "message": "Share the user feedback forms",
        "created_at": new Date()
    },
    {
        "from": "Kiran",
        "to": "Deepak",
        "message": "Send the marketing plan",
        "created_at": new Date()
    },
    {
        "from": "Nisha",
        "to": "Sunil",
        "message": "Can you email me the interview transcripts?",
        "created_at": new Date()
    },
    {
        "from": "Rakesh",
        "to": "Rohit",
        "message": "Share the financial statements",
        "created_at": new Date()
    },
    {
        "from": "Tina",
        "to": "Akash",
        "message": "Send me the draft report",
        "created_at": new Date()
    },
    {
        "from": "Varun",
        "to": "Anita",
        "message": "Forward the contract documents",
        "created_at": new Date()
    },
    {
        "from": "Meera",
        "to": "Kunal",
        "message": "Please share the survey results",
        "created_at": new Date()
    },
    {
        "from": "Vijay",
        "to": "Neelam",
        "message": "Send over the presentation",
        "created_at": new Date()
    },
    {
        "from": "Divya",
        "to": "Suresh",
        "message": "Can you share the design mockups?",
        "created_at": new Date()
    },
    {
        "from": "Naveen",
        "to": "Snehal",
        "message": "Please email the test scripts",
        "created_at": new Date()
    },
    {
        "from": "Jyoti",
        "to": "Sahil",
        "message": "Forward me the user manuals",
        "created_at": new Date()
    },
    {
        "from": "Ajay",
        "to": "Pooja",
        "message": "Send me the proposal document",
        "created_at": new Date()
    }
];

Chat.insertMany(allChats);