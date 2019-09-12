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