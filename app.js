const express=require('express');
const path=require('path');

const app=express();
const port=3000;
app.use(express.static('public'));

app.get('/html/:fileName',(req,res)=>{
const fileName=req.params.fileName;
const filePath=path.join(__dirname,'public','html',fileName);


res.sendFile(filePath,(err)=>{
if(err){
    console.error(err);
    res.status(err.status || 500).send('wystapił błąd');
}
else{
    console.log(`plik${fileName} został wysłany`);
}
});

});

app.listen(port,()=>{
  console.log(  `Aplikacja działa na porcie nr : ${port}`);
});