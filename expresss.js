const knex=require("./config/db.js")
const express=require('express')
const res = require("express/lib/response")
const port=4000
const app=express()
app.use(express.json())

// this route is for inserting data into mysql database
app.post("/insert",(req,res)=>{
    knex('bhatt').insert(req.body).then(()=>{
        res.send("data inserted");
    }).catch(err=>{
        res.send(err.message);
    })
})
// this route is for getting data from mysql database
app.get('/getdata',(req,res)=>{
    knex("bhatt").then((data)=>{
        res.send(data)
    }).catch(err=>{
        res.send(err.message)
    })
})
// this route is for showing name of user using its email and password
app.post("/checkdata",(req,res)=>{
    knex("bhatt").where({email:req.body.email, password:req.body.password}).then(data=>{
        if(data.length >0){
            res.send(data[0].name)
        }else{
            res.send("user does not exist")
        }
    })
    
})
// this route is for updating data in mysql databases
app.put("/updatedata/:email",(req,res)=>{
    const email=req.params.email
    const newData = {
        email:email,
        name:req.body.name,
        password:req.body.password
    }

    knex('bhatt').where({email}).update(newData).then(()=>{
        res.send('dataupdated')
    }).catch(err=>{
        res.send(err.message)
    })

})
// this route is for deleting data from msql databases
app.put("/deletedata/:email",(req,res)=>{
    const email=req.params.email
    const newData = {
        email:email,
        name:req.body.name,
        password:req.body.password
    }

    knex('bhatt').where({email}).del(newData).then(()=>{
        res.send('dataupdated')
    }).catch(err=>{
        res.send(err.message)
    })

})

app.listen(port,()=>{
    console.log('your port is runing ');
})

