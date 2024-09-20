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