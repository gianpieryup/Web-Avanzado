//Las siguientes funciones son asincronas
//La conexion en la base de datos
//las peticiones a servidores exterons

//cada 1 segundo se ejecuta esa funcion
//setInterval(tiempo,funcions)

//setTimeout : se ejecuta esta funcion despues de tiempo 
//setTimeout(funcion,tiempo)

// -- Codigo escrito por terceros --
function demoroEnResponder() {
    return new Promise( function(resolve, reject) {
        setTimeout(function() {
            console.log('Finalizo el proceso de demoroEnResponder')
            resolve()
            //aca poner el reject
        }, 1000);
    });
}
//reject(new Error('No puded realizar X'))


// -- Nuestro código --
// La funcion demoro en responder demora 1 segundo en responder
function iniciar() {
    console.log('Antes');
    demoroEnResponder() // Que pasa aca, se ejecuta la siguiente linea antes de finalizar esta operacion
    console.log('Despues');
}

//iniciar();


//async y await : funciones de asincronicas,copiadas de C#
//async es un propiedad de las funciones , se pine para usar las awaits
//await : se pone para que respete el orden de ejecucion como tradicionalmente , dado de node ejecuta siempre que pueda lo que demora lo bota aun lado y sigue con lo demas
async function iniciarTry() {
    try{
        console.log("Antes");
        var total = await demoroEnResponder()
        console.log("Despues");
        console.log(total);    
    }catch(e){
        //Si ocurre un error en la linea 39 no se ejecutan niguna de las demas instrucciones la 40,41...
        //Se ejecuta todo lo que hay en este cath
        console.log("SAlio u Warning");
        
    }
}
iniciarTry();

function  iniciarPromesa() {
    console.log("Antes");
    demoroEnResponder().then(function (total) {
        console.log('finalizar');
       
    }).catch(function(error) {
        //si hubo un errpr en la promesa
    })
    console.log('finalizar');
}

//node :no quedarse esperando sin hacer nada
//calbacks --> Promise -- > Asyn/await

//funciones de Arrays
findIndex : me retorna la primera posicion de un arrays, que cumpla la siguiente condicion
spliece(arg1) : corta el array desde la posicion 0 hasta la posicion arg1
splice(arg1,arg2): corta el array desde la posicion arg1 hasta que tenga longitud igual a arg2
var edades = [10,20,30,40];
var edadesCambiadas = edades.map(unaEdad =>{
    return unaEdad+1;//condicion
})