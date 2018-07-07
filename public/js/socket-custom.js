var socket = io();

socket.on('connect', function() {
	console.log('Conectado al servidor')
});

// Escuchar
socket.on('disconnect', function() {
	console.log('Perdimos coneccion con el servidor')
});

// Enviar información
socket.emit('enviarMensaje', {
	usuario: 'Rodolfo',
	mensaje: 'Hola mundo'
}, function( resp ){
	console.log('respuesta server: ', resp)
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje){
	console.log('Servidor: ', mensaje)
})