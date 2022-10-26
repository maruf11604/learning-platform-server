const express= require('express');
const app=express();
const cors=require('cors');
const port=process.env.PORT || 5000;



const topics= require('./data/topic.json');



app.use(cors());
app.get('/',(req,res)=>{
    res.send('api running on port')
})

app.get('/topics',(req,res)=>{
    res.send(topics);
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})