var Peticion = function(tipo,url,datos,callback){

    var data = datos;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open(tipo, url);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var respuesta = JSON.parse(this.responseText)
            return callback(respuesta)
        }
    });


}

var listarVendedores = function(){


    var post ={
        tipo: 'POST',
        host:'http://localhost:3000/vendedores/listar',
        data: ""
        
    }

    Peticion(post.tipo,post.host,post.data,function(resultado){
        console.log(resultado)


        var item = '';
        var misdatos = document.getElementById('misDatos')

        for (let i = 0; i < resultado.data.length ; i++){
    
            item = item + '<tr>'+
            '<th scope="row">'+ i +'</th>'+
            '<td>'+ resultado.data[i].nombre+'</td>'+
            '<td>'+ resultado.data[i].edad+'</td>'+
            '<td>'+ resultado.data[i].celular+'</td>'+
          '</tr>'
    
          console.log(item)

          misdatos.innerHTML = item
        }

    })




    
}

var GuardarVendedor = function(){
    var nombreP = document.getElementById('nombre').value
    var edadP = document.getElementById('edad').value
    var celularP = document.getElementById('celular').value
    console.log(nombreP)
    console.log(edadP)
    console.log(celularP)

    var post ={
        tipo: 'POST',
        host:'http://localhost:3000/vendedores/guardar',
        data: "nombre="+nombreP+"&edad="+edadP+"&celular="+celularP+""
        
    }

    Peticion(post.tipo,post.host,post.data,function(resultado){
        console.log(resultado)
        swal("App Vendedores", resultado.mensaje);

    })

    listarVendedores()
}




listarVendedores()