function Traducir(){

    var texto = editor.getValue();
    console.log(texto);

    consolaJS.setValue("");
    consolaJS.refresh();

    puerto = 3000;

    var url='http://localhost:'+ puerto +'/Traducir/';

    $.post(url,{text:texto},function(data,status){
        if(status.toString()=="success"){
            consolaJS.setValue(data);
            consolaJS.refresh();
        }else{
           
        }
    });
}

function Ejecutar(){

    var contenido = editor.getValue();
    
    if (contenido == ""){

        consolaJS.setValue("No hay entrada para analizar.");
        consolaJS.refresh();
        consolaPython.setValue("No hay entrada para analizar.");
        consolaPython.refresh();


    } else {

        var data = {
            "texto" : contenido 
        };
    
        fetch("http://localhost:3000/Traducir/",{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                "Content-Type" : "application/json"  }
            }).then(res => res.json())
            .catch(error => console.log(error))
            .then(response => resultado(response));

    }

} 

function Ejecutar2(){

    var contenido = editor2.getValue();
    
    var data = {
        "texto" : contenido 
    };

    //console.log("hola");

    fetch("http://localhost:3000/Traducir/",{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            "Content-Type" : "application/json"  }
        }).then(res => res.json())
        .catch(error => console.log(error))
        .then(response => resultado(response));
}     

function Ejecutar3(){

    var contenido = editor3.getValue();
    
    var data = {
        "texto" : contenido 
    };

    //console.log("hola");

    fetch("http://localhost:3000/Traducir/",{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            "Content-Type" : "application/json"  }
        }).then(res => res.json())
        .catch(error => console.log(error))
        .then(response => resultado(response));
} 

function Ejecutar4(){

    var contenido = editor4.getValue();
    
    var data = {
        "texto" : contenido 
    };

    //console.log("hola");

    fetch("http://localhost:3000/Traducir/",{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            "Content-Type" : "application/json"  }
        }).then(res => res.json())
        .catch(error => console.log(error))
        .then(response => resultado(response));
} 

function resultado(response){

    consolaJS.setValue(response.jsconsole);
    consolaJS.refresh();
    consolaPython.setValue(response.pyconsole);
    consolaPython.refresh();

}

function TraduccionJS(){

    puerto = 3000;
    var url='http://localhost:'+ puerto +'/descargarJS/';
    window.open(url);

}

function TraduccionPy(){

    puerto = 3000;
    var url='http://localhost:'+ puerto +'/descargarPy/';
    window.open(url);

}
