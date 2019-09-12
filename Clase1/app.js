console.log("Hola mundo");
//Funciones
function intervalo(num1,num2){
    if(num2>num1){
        var lista =[];
        for(var i =num1;i <= num2 ;i++){
            lista.push(i);
        }
        console.log(lista);
        
    }else{
        console.log("El segundo parametro es menor que el primero");
        
    }
}

intervalo(2,5)

//switch
function formatDate(d, m ,y) {
    var output;
    switch (m) {
            case 1: m = "Enero"
            break;
            case 2: m = "Febrero"
            break;
            case 3: m = "Marzo"
            break;
            case 4: m = "Abril"
            break;
            case 5: m = "Mayo"
            break;
            case 6: m = "Junio"
            break;
            case 7: m = "Julio"
            break;
            case 8: m = "Agosto"
            break;
            case 9: m = "Septiembre"
            break;
            case 10: m = "Octubre"
            break;
            case 11: m = "Noviembre"
            break;
        default:
        break;
    }
    output = "El dia "+ d + " de " + m + " de "+ y;
    return output;
  //  console.log(output);    
}
console.log(formatDate(12,9,1998));
var objeto = 
[
    {
    id:1,
    nombre:'gianp',
    troll: true
    },
    {
    id:2,
    nombre:'veronica',
    troll: true,
    excusas: ["el perro"],
    chupamedias: false,
    trabajo:[
        {trabajo:'rapi', turno:'noche'},
        {trabajo:'programadora', turno:'mañana'},
            ]
    }

];

console.log(objeto[0].id + " " + objeto[0].nombre);
console.log(objeto[1].trabajo[1].turno);

