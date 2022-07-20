class Usuario {
    constructor(nombre, apellido, edad, usuario, contrasena) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.usuario = usuario
        this.contrasena = contrasena
    }
}

const usuario1 = new Usuario(prompt("ingrese su nombre"), prompt("ingrese su apellido"), parseInt(prompt("ingrese su edad")), prompt("ingrese su usuario"), prompt("ingrese su contrasena"))

const usuario2 = new Usuario(prompt("ingrese su nombre"), prompt("ingrese su apellido"), parseInt(prompt("ingrese su edad")), prompt("ingrese su usuario"), prompt("ingrese su contrasena"))

const usuario3 = new Usuario(prompt("ingrese su nombre"), prompt("ingrese su apellido"), parseInt(prompt("ingrese su edad")), prompt("ingrese su usuario"), prompt("ingrese su contrasena"))

const usuario4 = new Usuario(prompt("ingrese su nombre"), prompt("ingrese su apellido"), parseInt(prompt("ingrese su edad")), prompt("ingrese su usuario"), prompt("ingrese su contrasena"))

const usuarios = [usuario1, usuario2, usuario3, usuario4]

usuarios.forEach(usuario => { console.log(usuario) })

let nombreABuscar = prompt("ingrese nombre del usuario a buscar")
let apellidoABuscar = prompt("ingrese apellido del usuario a buscar")

console.log(usuarios.find(usuario => usuario.nombre == nombreABuscar && usuario.apellido == apellidoABuscar))

alert("Gracias por su busqueda!!")