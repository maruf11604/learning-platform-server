const express= require('express');
const app=express();
const cors=require('cors');
const port=process.env.PORT || 5000;


//get all data
const topics= require('./data/topic.json');
const categories=require('./data/categories.json');


//use cors to setup localhost
app.use(cors());

//make some api

app.get('/',(req,res)=>{
    res.send('api running on port')
})

app.get('/topics',(req,res)=>{
    res.send(topics);
})

app.get('/category',(req,res)=>{
    res.send(categories);
})

app.get('/course/:id',(req,res)=>{
    const id=req.params.id;
    if(id=== '05'){
        res.send(categories);
    }
    else{
        const categoryCourse=categories.filter(n=>n.category_id===id);
        res.send(categoryCourse);
    }
    
})

app.get('/program/:id',(req,res)=>{
    const id =req.params.id ;
    const selectedCategories=categories.find(n =>n._id===id);
    res.send(selectedCategories)
})

app.get('/checkout/:id',(req,res)=>{
    const id =req.params.id ;
    const selectedCheck=categories.find(n =>n._id===id);
    res.send(selectedCheck);
})





app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})