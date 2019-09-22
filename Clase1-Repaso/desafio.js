const curso = [ 

    {
        id : 1,
        nombre : 'franco',
        edad : 25,
        lenguajes : [
            {id_l : 1 , nombre : 'Javascript', nivel : 'medio'},
            {id_l : 2, nombre : 'Node', nivel : 'alto'}
        ],
        hobbies : [
            {musica : 'Soda', deporte : 'Crossfit', extra : 'Programar'}
        ]
    },
    {
        id:2,
        nombre : 'Matias',
        edad : 29,
        lenguajes : [
            {id_l : 1 , nombre : 'Javascript', nivel : 'bajo'}
        ]
    },
    {
        id:3,
        nombre : 'Julian',
        edad : 22,
        lenguajes : []
    },
    {
        id:5,
        nombre : 'Lucero',
        edad : 24,
        lenguajes : [
            {id_l : 3, nombre : 'HTML', nivel : 'alto'},
            {id_l : 2, nombre : 'node', nivel : 'medio'},
            {id_l : 4, nombre : ' C++', nivel : 'medio'}
        ]
    },
    {
        id:8,
        nombre : 'Ezequiel',
        edad : 21,
        lenguajes : [
            {id_l : 3, nombre : 'CSS3', nivel : 'alto'},
            {id_l : 2, nombre : 'Angular', nivel : 'medio'},
            {id_l : 4, nombre : ' PYTHON', nivel : 'medio'}
        ]
    }
];

function informeCurso(objeto){
    var cantidadAlumnos = objeto.length;
    var promedioEdad;
    var acumulador=0;
    var elMenor = objeto[0];
    for(var i=0;i<objeto.length ;i++){
        acumulador = acumulador + objeto[i].edad;
    }
    for(var i=0;i<objeto.length - 1 ;i++){
        if(objeto[i].edad > objeto[i+1].edad){
            elMenor = objeto[i+1];
        }
    }
    promedioEdad = acumulador/cantidadAlumnos;
    console.log("La cantidad de alumnos son " + cantidadAlumnos);
    console.log("El promedio de edades " + promedioEdad);
    console.log("La cantidad de alumnos son " + elMenor.nombre);
}
informeCurso(curso)

function conocimientosPrevios(array) {
    var noSaben = [];
    for (var i = 0; i < array.length; i++) {
        if(array[i].lenguajes.length == 0){
            noSaben.push(array[i].nombre+ " " + array[i].edad)
        }
        
    }
    return noSaben;
}
console.log(conocimientosPrevios(curso));

