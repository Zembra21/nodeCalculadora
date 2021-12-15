var usuariosC = require('../controladores/usuariosController.js').usuarios






//app.get('/',function(request, response){
 //   response.send('hola mundo raro')
//})

app.get('/sumar/:valor1/:valor2',function(request, response){
    var a = parseInt( request.params.valor1)
    var b = parseInt( request.params.valor2)
    var c = a+b
    response.json({data: 'El valor es: ' + c})
})



app.post('/saludo', function(request, response){
    var nombre = request.body.nombre;
    var apellido = request.body.apellido;

    response.json({state:true, mensaje: 'ok', resultado: 'Hola ' + nombre + ' ' + apellido})

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



var VendedoresC = require('../controladores/vendedoresController.js').vendedores


app.post('/vendedores/guardar',function(request,response){
    VendedoresC.guardar(request,response)
})

app.post('/vendedores/listar',function(request,response){
    VendedoresC.listar(request,response)
})

app.post('/vendedores/modificar',function(request,response){
    VendedoresC.modificar(request,response)
})

app.post('/vendedores/eliminar',function(request,response){
    VendedoresC.eliminar(request,response)
})