function Articulo(producto, precio, cantidad, envio) {
  this.producto = producto;
  this.precio = precio;
  this.cantidad = cantidad;
  this.envio = envio;
}
function Usuario(nombre, apellido, email){
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
}
const arrayUsuarios = [];
const arrayArticulos = [];
let pregunta = prompt("¿desea cargar un producto? (s/n) ");

while (pregunta === "s") {
  let producto = prompt("ingrese el  producto que desea comprar ");
  let precio = prompt("ingrese el precio del producto");
  let cantidad = prompt("ingrese cuantos quiere ");
  let envio = prompt("ingrese localidad");
  let articuloIngresado = new Articulo(producto, precio, cantidad, envio);
  arrayArticulos.push(articuloIngresado);
  pregunta = prompt("¿desea cargar otro producto? (s/n) ");
}
pregunta2 = prompt("¿Regristrarse para futuras compras? (si/no)");
while (pregunta2 === "si") {
  let nombre = prompt("Ingresa tu nombre");
  let apellido = prompt("Ingresa tu apellido");
  let email = prompt("Ingresa tu email");
  let nuevoUsuario = new Usuario(nombre, apellido, email);
  arrayUsuarios.push(nuevoUsuario);
  pregunta2 = prompt("¿Desea agregar mas informacion? (si/no)");
}
let envio = 300;
let totalCompra = 0;

for (i = 0; i < arrayArticulos.length; i++) {
  totalCompra =
    totalCompra + arrayArticulos[i].precio * arrayArticulos[i].cantidad ;
  totalCompraEnvio = 
    totalCompra + envio;
}
arrayUsuarios.sort(function(a,b){
  if (a.nombre< b.nombre) return -1;
  if (a.nombre> b.nombre) return 1;
  return 0;
})

arrayArticulos.sort(function(a,b){
  if (a.producto< b.producto) return -1;
  if (a.producto> b.producto) return 1;
  return 0;
})
console.log(arrayArticulos);
console.log(arrayUsuarios);

alert("gracias por su compra! el monto de su compra es $" + totalCompra + " mas el envio en total es : $" + totalCompraEnvio);
