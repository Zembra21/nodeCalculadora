var usuariosC = require('../controladores/usuariosController.js').usuarios






app.get('/',function(request, response){
    response.send('hola mundo')
})

app.get('/sumar/:valor1/:valor2',function(request, response){
    var a = parseInt( request.params.valor1)
    var b = parseInt( request.params.valor2)
    var c = a+b
    response.send('El valor es: ' + c)
})

// OPERACION DE SUMA +++++++++++++++

app.post('/operaciones/sumar', function(request, response){
    var a = parseInt(request.body.a);
    var b = parseInt(request.body.b);

    if(a == '' || a == null || a== undefined){
        response.json({state:false,mensaje:'Se necesita el valor numero 1'})
        return false
    }

    if(b == '' || b == null || b== undefined){
        response.json({state:false,mensaje:'Se necesita el valor numero 2'})
        return false
    }

    var c = a + b;

    response.json({state:true, mensaje: 'ok', resultado: 'La suma de ' + a + ' y ' + b + ' es:' + c})
})


// OPERACION DE RESTA ---------------


app.post('/operaciones/restar', function(request, response){
    var a = parseInt(request.body.a);
    var b = parseInt(request.body.b);

    if(a == '' || a == null || a== undefined){
        response.json({state:false,mensaje:'Se necesita el valor numero 1'})
        return false
    }

    if(b == '' || b == null || b== undefined){
        response.json({state:false,mensaje:'Se necesita el valor numero 2'})
        return false
    }

    var c = a - b;

    response.json({state:true, mensaje: 'ok', resultado: 'La resta de ' + a + ' y ' + b + ' es:' + c})
})




// OPERACION DE MULTIPLICACION xxxxxxxxxxxxxxxxx


app.post('/operaciones/multiplicar', function(request, response){
    var a = parseInt(request.body.a);
    var b = parseInt(request.body.b);

    if(a == '' || a == null || a== undefined){
        response.json({state:false,mensaje:'Se necesita el valor numero 1'})
        return false
    }

    if(b == '' || b == null || b== undefined){
        response.json({state:false,mensaje:'Se necesita el valor numero 2'})
        return false
    }

    var c = a * b;

    response.json({state:true, mensaje: 'ok', resultado: 'La multiplicación de ' + a + ' y ' + b + ' es:' + c})
})






// OPERACION DE DIVISION ///////////////////


app.post('/operaciones/division', function(request, response){
    var a = parseInt(request.body.a);
    var b = parseInt(request.body.b);

    if(a == '' || a == null || a== undefined){
        response.json({state:false,mensaje:'Se necesita el valor numero 1'})
        return false
    }

    if(b == '' || b == null || b== undefined){
        response.json({state:false,mensaje:'Se necesita el valor numero 2'})
        return false
    }

    var c = a / b;

    response.json({state:true, mensaje: 'ok', resultado: 'La división de ' + a + ' y ' + b + ' es:' + c})
})