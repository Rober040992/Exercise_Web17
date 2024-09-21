function obtenerUsuario(id, callback) {
    setTimeout(() => {
        let usuario;
        if (id === 1) {
            usuario = { id: 1, nombre: 'John Doe' };
        }
        callback(usuario);
    }, 2000);
}

obtenerUsuario(1, (usuario) => {
    console.log(usuario); // Resultado: { id: 1, nombre: 'John Doe' }
});


// no puedo resolverlo, pero esto es lo que me da nuestro colega GPT
// me es muy dificil de leer
function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                const usuario = { id: 1, nombre: 'John Doe' };
                resolve(usuario);
            } else {
                reject('Usuario no encontrado');
            }
        }, 2000);
    });
}

obtenerUsuario(1)
    .then(usuario => {
        console.log(usuario); // { id: 1, nombre: 'John Doe' }
    })
    .catch(error => {
        console.error(error);
    });