// -- Codigo escrito por terceros --
function obtenerTodos() {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            resolve(
                [
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "delectus aut autem",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 2,
                        "title": "quis ut nam facilis et officia qui",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 3,
                        "title": "fugiat veniam minus",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 4,
                        "title": "et porro tempora",
                        "completed": true
                    },
                    {
                        "userId": 1,
                        "id": 5,
                        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 6,
                        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
                        "completed": false
                    }
                ]
            )
        }, 500);
    })
}

// -- Completar el código --
async function test() {
    var respuesta = await obtenerTodos();
    // convertir respuesta, para que tenga todos los elementos, hasta el id 5 (sin incluirlo)
    // Modificar desde aqui
    var posicion = respuesta.findIndex(item => {
        return item.id == 5;
    })
    console.log(posicion);
    
    respuesta.splice(posicion)
    // Hasta aqui
    console.log(respuesta)
}

test()