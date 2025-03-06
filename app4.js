const express =require('express');
const bodyParser=require('body-parser');

const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send(`
    <html>
    <head>
    <title> aplikacja Express </title>
    </head>
    <body>
    <h1> Witja! </h1>
    <form method="post" action="/result">
    <input type="text" id="name" required/>
    <select id="plec">
    <option value="m">Męzczyzna</option>
    <option value="k">Kobieta</option>
    <select>
    <button onclick="a()"> Wyślij</button>
    <p id="wynik"></p>
    <script>
    function a() {
        let name=document.getElemntById("name").value;
        let plec=document.getElemntById("plec").value;
        let b="Witaj ${name} , jestes ${plec === "kobieta" ? "kobietą " : "męzczyzna"}";
        document.getElementById("wynik").textContent=abc;
    }
    </script>
    </form>
    </body>
    </html>
    `);
    
});





app.listen(port, ()=>{
    console.log(`Aplikacja działa na porcie: ${port}`);
});
