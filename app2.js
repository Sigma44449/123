const express =require('express');
const bodyParser=require('body-parser');
const {check, validationResult}=require('express-validator');

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
    <h1> Witaj! </h1>
    <form method="post" action="/result">
    <label>Imię</label>
    <input type="text" name="name" required/>
    </br>
    <label>email</label>
    <input type="email" name="email"/>
    <button type="submit"> Wyślij</button>
    </form>
    </body>
    </html>
    `);
});

app.get('/omnie',(req,res)=>{
    res.send(`
    <html>
    <head>
    <title> aplikacja Express </title>
    </head>
    <body>
    <h1> Yahor</h1>
    </body>
    </html>
    `);
})
app.post('/result',[
    check('name').trim().isLength({min:3}).withMessage('Imię musi mieć co najmniej 3 znaki'),
    check('email').isEmail().withMessage('NIepoprawny email')
],(req,res)=>{
const errors=validationResult(req);
if(!errors.isEmpty())
{
    return  res.status(400).json({errors: errors.array()});
}
    const name=req.body.name;
    const email=req.body.email;
    
    res.send(`<h2> Witaj ${name} </h2>`);
});

app.listen(port, ()=>{
    console.log(`Aplikacja działa na porcie: ${port}`);
});
