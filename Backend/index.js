import express from "express"

const app=express();
app.use(express.json())

let products=[{
    "id":1,
    "name":"Samsung Galaxy S25",
    "price":110000,
    "category":"mobiless"
}]

app.get("/",(req, res)=>{
    res.json(products)
})

app.get("/:id",(req,res)=>{
    console.log("user is asking for id=>",req.params.id)
    const product=products.filter(p=>p.id=== Number(req.params.id))
    console.log(product)
    res.json(product)
})

app.post("/",(req,res)=>{
    let newid=products.length+1;
    console.log("Adding Product",req.body,newid)
    let newProduct = req.body
    newProduct.id = newid;
    products.push(newProduct)
    res.send("Successfully Created")
});

app.listen("8000",()=>{
    console.log("Server is Running")
})