var express = require('express');
global.app = express();
global.config = require('./config.js').config;




var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



app.all('*',function(req, res, next){

    var whitelist = req.headers.origin;
 
    res.header('Access-Control-Allow-Origin', whitelist);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');  
    res.header('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.header("Access-Control-Allow-Credentials", "true");
    //res.header('Set-Cookie: cross-site-cookie=name; SameSite=None; Secure');
 
    next();
     
});


require('./routes/rutas.js')

app.use('/',express.static(__dirname + '/Pagina'))

app.listen(config.puerto,function(){
    console.log('El servidor esta funcionando por el puerto: ' + config.puerto)
})