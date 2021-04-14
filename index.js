const { response } = require("express");
const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.static("css"));


const listener = app.listen(process.env.PORT || 3000, () =>{
    console.log(`Your app is listening on port ${listener.address().port}`);
});

app.use ((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
//link page to index
app.get("/",(request, response)=>{
    response.sendFile(`${__dirname}/views/index.html`);
});

//link page to ex1.
app.get("/ex1",(request, response)=>{
    response.sendFile(`${__dirname}/views/ex1.html`);
});

app.post("/ex1",upload.array(), (request, response)=>{
    //console.log(request.body);
      const name = request.body.name;
      const email= request.body.email;
      response.send(`${name}, thank you for your order. We will keep you posted on delivery status at ${email}.`);
});

app.get("/ex2",(request, response)=>{
    response.sendFile(`${__dirname}/views/ex2.html`);
});

app.post("/ex2",upload.array(), (request, response)=>{
    //console.log(request.body);
      const travelerName= request.body.travelerName;
      response.send(`Your name is ${travelerName} and you visited ${countries.length} countries. Keep travelling.`);
});


const articles = [
    {id: 1, title:" First article", content:"Hello World!"},
    {
    id : 2, 
    title: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit mauris ac porttitor accumsan. Nunc vitae pulvinar odio, auctor interdum dolor.Aenean sodales dui quis metus iaculis, hendrerit vulputate lorem vestibulum."
    },
    {
    id:3,
    title:"Lorem upsum in French",
    content: 
    "J’en dis autant de ceux qui, par mollesse d’esprit, c’est-à-dire par lacrainte de la peine et de la douleur, manquent aux devoirs de la vie. Et il est très facile de rendre raison de ce que j’avance."
    }
];



app.get("/ex3",(request, response)=>{
    response.sendFile(`${__dirname}/views/ex3.html`);
});

app.post("/ex3",upload.array(), (request, response)=>{
    //console.log(request.body);
      const Title= request.body.title;
      const content = request.body.content;
      response.send(`New article added successfully with title ${Title} and ID ${Math.max(articles)}!`);
});
