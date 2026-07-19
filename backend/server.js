const express=require("express");
const dotenv=require('dotenv')
const { MongoClient } = require('mongodb');
const cors=require('cors')
const bodyparser=require('body-parser')
dotenv.config()
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://admin:shopping123@cluster0.qmguru9.mongodb.net/password';
const client = new MongoClient(url);

// Database Name
const dbName = 'passop';
const PORT = process.env.PORT
const app=express();
app.use(express.json())

app.use(bodyparser.json())
app.use(cors())
  client.connect();


  //get all password
 app.get("/",async(req,res)=>{
    const db = client.db(dbName);
    const collection = db.collection('documents');
    const findResult = await collection.find({}).toArray();
    console.log("hello");
    res.json(findResult)
    
})
 //save password
 app.post("/",async(req,res)=>{
    const password=req.body
    const db = client.db(dbName);
    const collection = db.collection('documents');
    const findResult = await collection.insertOne(password)
    res.send({success:true,reult:findResult})
    console.log("hello");
    
})

//delete password
 app.delete("/",async(req,res)=>{
    const password=req.body
    const db = client.db(dbName);
    const collection = db.collection('documents');
    const findResult = await collection.deleteOne(password)
    res.send({success:true,result:findResult})
    console.log("hello");
    
})

app.listen(3000,()=>{
    console.log(`server is running on port ${PORT}`);
    
})