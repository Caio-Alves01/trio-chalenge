const express= require('express')
const bodyparser= require('body-parser')
const app = express()
app.use(bodyparser.json())

var a = [

]
app.get("/endpoint",(req,res)=> {
    console.log(typeof(req.query))
    if(Object.keys(req.query).length!=0){
        const{q} = req.query
        q ? res.send(a.filter(item => item.nome.includes(q))): res.send(q)
    }else{
        res.send(a)
    }
})
app.put("/pessoas/:id",(req,res)=>{
    const id= req.params.id
    const item= a.find(p=>p.id==id)
    item.nome= req.body.nome
    item.idade= req.body.idade
    res.send(a)
})

app.listen(504,()=>{
    console.log("a")
})

app.post("/pessoas",(req,res)=>{
    const pessoas = req.body
    a.push(pessoas)
    res.send(a)
})

app.delete("/pessoas/:id",(req,res)=>{
    const id = req.params.id 
    const item= a.find(p=>p.id==id)
    a.splice(id,1)
    res.send(item)

}) 
