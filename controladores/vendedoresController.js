var vendedoresM = require('../modelos/vendedoresModel.js').vendedores
var vendedoresController = {};


vendedoresController.guardar = function (request,response){
    var post={
        nombre: request.body.nombre,
        edad: request.body.edad,
        celular: request.body.celular
    }

    if(post.nombre == undefined || post.nombre == null || post.nombre == ''){
        response.json({state:false,mensaje:'El campo nombre es obligatorio'})
        return false;
    }

    if(post.edad == undefined || post.edad == null || post.edad == ''){
        response.json({state:false,mensaje:'El campo edad es obligatorio'})
        return false;
    }
    
    if(post.celular == undefined || post.celular == null || post.celular == ''){
        response.json({state:false,mensaje:'El campo celular es obligatorio'})
        return false;
    }

    vendedoresM.guardar(post,function(respuesta){
        response.json(respuesta)
    })
}



vendedoresController.listar = function (request,response){
    vendedoresM.listar(null,function(res){
        response.json(res)
    })

}

vendedoresController.modificar = function (request,response){
    var post = {
        posicion:request.body.posicion,
        nombre:request.body.nombre,
        edad: request.body.edad,
        celular: request.body.celular
    }

    if(post.posicion== undefined || post.posicion == null || post.posicion == ''){
        response.json({state:false,mensaje:'el campo posicion es obligatorio'})
        return false;
    }

    if(post.nombre== undefined || post.nombre == null || post.nombre == ''){
        response.json({state:false,mensaje:'el campo nombre es obligatorio'})
        return false;
    }

    if(post.edad== undefined || post.edad == null || post.edad == ''){
        response.json({state:false,mensaje:'el campo edad es obligatorio'})
        return false;
    }

    if(post.celular== undefined || post.celular == null || post.celular == ''){
        response.json({state:false,mensaje:'el campo celular es obligatorio'})
        return false;
    }

    vendedoresM.modificar(post,function(respuesta){
        response.json(respuesta)
    })
}

vendedoresController.eliminar = function (request,response){
    var post = {
        posicion:request.body.posicion,
    }

    if(post.posicion== undefined || post.posicion == null || post.posicion == ''){
        response.json({state:false,mensaje:'el campo posicion es obligatorio'})
        return false;
    }

    vendedoresM.eliminar(post,function(respuesta){
        response.json(respuesta)
    })
}


module.exports.vendedores = vendedoresController;