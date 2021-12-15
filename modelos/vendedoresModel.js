const { vendedores } = require("../controladores/vendedoresController");

var vendedoresModel = {};

var datos = [];

vendedoresModel.guardar = function (post,callback) {


    datos.push({nombre:''+post.nombre+'',edad:''+post.edad+'',celular:''+post.celular+''})
    return callback({state:true,mensaje:'vendedor registrado'})

}

vendedoresModel.listar = function (post,callback) {

    return callback({state:true,data: datos})

}

vendedoresModel.modificar = function (post, callback){
    datos[post.posicion].nombre = post.nombre;
    datos[post.posicion].edad = post.edad;
    datos[post.posicion].celular = post.celular;
    return callback({state: true, mensaje:'vendedor modificiado'})
}

vendedoresModel.eliminar = function (post, callback){
    datos.splice(post.posicion,1)
    return callback({state:true,mensaje:'vendedor eliminado'})
}
module.exports.vendedores = vendedoresModel;