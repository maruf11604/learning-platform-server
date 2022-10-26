const express= require('express');
const app=express();
const cors=require('cors');
const port=process.env.PORT || 5000;



const topics= require('./data/topic.json');
const categories=require('./data/categories.json');



app.use(cors());
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
    console.log(selectedCategories)
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})