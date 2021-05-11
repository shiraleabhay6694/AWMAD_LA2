var express = require('express')
var app = express()
var port = '3001'
var host = 'localhost'

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

app.use(express.static('public'))

  
app.get('/healthForm.html', function (req, res) {  
   res.sendFile(__dirname + "/" + "healthForm.html" );  
})

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to Health Form Registeration System</h1>`)
})

app.post('/result', urlencodedParser, function (req, res) {  
response = {  
       name:req.body.name,
       adhar:req.body.adhar,
       mobile:req.body.mobile,
       preAmount:req.body.preamount
   };  
   console.log(response);  
   res.end(JSON.stringify(response));
})



app.listen(port,host,(req,res)=>{
    console.log(`Listening on http://${host}:${port}`)
})
	