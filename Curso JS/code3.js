console.log('JS Cargado');
var cuentaElement = document.getElementById("contador");
var BgImagenElement = document.getElementById("bg-image");
var ValCuentaInicial = cuentaElement.innerHTML;
setInterval(function() {
    ValCuentaInicial = ValCuentaInicial > 0 ? ValCuentaInicial - 1 : ValCuentaInicial = 10;
    cuentaElement.innerHTML = ValCuentaInicial;
    var BgImgPath = ValCuentaInicial % 2 == 0 ? '/imgs/bg1.png' : '/imgs/bg2.png';
    BgImagenElement.src = BgImgPath;
}, 1000);

var porcentajeElement = document.getElementById("porcentaje");
var BarImagenElement = document.getElementById("barpg");
var ValPorcInicial = porcentajeElement.innerHTML;
setInterval(function(){
    ValPorcInicial = ValPorcInicial < 100 ? ValPorcInicial + 10 : ValPorcInicial = 0;
    porcentajeElement.innerHTML = ValPorcInicial;
    BarImagenElement.style.width = (ValPorcInicial/2)*10 + "px";
},500);

var boton  = document.getElementById("btn-click");
var bgPage = document.getElementById("fondo");
/* PRIMER FORMA DE UTILIZAR onclick
boton.onclick = function (){
    alert("Has dado click");
};
SEGUNDA FORMA DE UTILIZAR onclick
function darclick(){
    alert("Has dado click"); 
}
boton.onclick = darclick;//Si se llama como: boton.onclick = darclick()  incializa sin dar click 

PRIMER FORMA CON addEventListener
boton.addEventListener('click', function(){
    alert("Se realizo con addEventListener");
});
*/

function darclick(){
    //alert("Has dado click"); 
    var randomNum1 = Math.floor(Math.random() * 255);
    var randomNum2 = Math.floor(Math.random() * 255);
    var randomNum3 = Math.floor(Math.random() * 255);
    bgPage.style.backgroundColor = "rgb(" + randomNum1 + "," + randomNum2 + "," + randomNum3 + ")";
}

boton.addEventListener('click',darclick);

//CLASE 124
var HeadPrincipal = document.getElementById("main-head");
var BotonEliminar = document.getElementById("btn-click2");
var BotonAgregar = document.getElementById("btn-click3");

BotonEliminar.addEventListener('click',function() {
    HeadPrincipal.classList.remove('big');
});

BotonAgregar.addEventListener('click',function(){
    HeadPrincipal.classList.add('big');
});

//CLASE 125

var BotonAumentar = document.getElementById("btn-mayor");
var BotonDisminuir = document.getElementById("btn-menor");
var textoDePrueba = document.getElementById("text-test");
console.log(BotonAumentar.style.color) //Esta instruccion solo se ejecuta si en la etiqueta se agrega style, caso contrario regresará undefined
//para obtener un elemento directo del archivo css, se utiliza getComputedStyle
console.log(window.getComputedStyle(BotonDisminuir).fontSize);
var valorInicial = window.getComputedStyle(textoDePrueba).fontSize;
var valorInicial = parseInt(valorInicial); //Se usa parseInt para extraer unicamente la parte numerica 
BotonAumentar.addEventListener('click', function(){
    if (valorInicial<62)
    {
        valorInicial = valorInicial + 5;
        textoDePrueba.style.fontSize = valorInicial + "px";
        console.log(valorInicial+"px")
    } else {
        alert("Llegaste al tamaño maximo");
    }

});

BotonDisminuir.addEventListener('click', function(){
    if(valorInicial>12)
    {
        valorInicial = valorInicial - 5;
        textoDePrueba.style.fontSize = valorInicial + "px";
        console.log(valorInicial+"px")
    } else {
        alert("Llegaste al tamaño minimo");
    }

});
//CLASE 126 - EVENTOS DE FORM
var User = document.getElementById('UsuarioTest');
var Form = document.getElementById('login-form');
User.addEventListener('change',function(){
    console.log("Has cambiado");
});
User.addEventListener('input',function(event){
    console.log("Has escrito algo");
  //console.log(event.target); Indica que elemento se activa al momento de teclear
    var ValorActual = event.target.value;
    ValorActual = ValorActual.toUpperCase();
    console.log(ValorActual);
});

User.addEventListener('focus',function(event){
    console.log("Has enfocado en el input");
});

User.addEventListener('blur',function(event){
    console.log("Has desenfocado del input");
});

Form.addEventListener('submit',function(e){
    alert("Has llenado el formulario");
    e.preventDefault();
});

//CLASE 127 - EVENTOS DE TECLADO
document.body.addEventListener('keydown', function(e){
    //var tecla = e.keyCode; ESTA FORMA NO SE UTILIZA, keyCode quedo en deshuso
    var tecla = e.key;
    console.log("Se presiono la tecla: "+ tecla);
    if(tecla == ' ')
    {
        console.log("Se presiono la tecla: space");
    }
});
document.body.addEventListener('keyup', function(e){
    //var tecla = e.keyCode; ESTA FORMA NO SE UTILIZA, keyCode quedo en deshuso
    var tecla = e.key;
    console.log("Se dejo de presionar la tecla: "+ tecla);
    if(tecla == ' ')
    {
        console.log("Se presiono la tecla: space");
    }
});
document.body.addEventListener('keypress', function(e){
    //var tecla = e.keyCode; ESTA FORMA NO SE UTILIZA, keyCode quedo en deshuso
    var tecla = e.key;
    console.log("Se esta presionando la tecla: "+ tecla);
    if(tecla == ' ')
    {
        console.log("Se presiono la tecla: space");
    }
});

//CLASE 128 - EVENTOS DE MOUSE

var botonMouse = document.getElementById("btn-c128");
botonMouse.addEventListener('mousedown', function(){
    console.log("Se ha presionado el click del raton");
});
botonMouse.addEventListener('mouseup', function(){
    console.log("Se ha dejado de presionar el click del raton");
});

botonMouse.addEventListener('click', function(){
    console.log("Se ha presionado el click derecho del raton");
});
botonMouse.addEventListener('dblclick', function(){
    console.log("Se ha presionado doble click del raton");
});

var MouseOver = document.getElementById("over");
var ValorOver = document.getElementById("overval");
var ContadorOver = parseInt(ValorOver.innerHTML);
MouseOver.addEventListener('mouseover',function () {
    ContadorOver = ContadorOver + 1; 
    ValorOver.innerHTML = ContadorOver;
    console.log("Se ha pasado sobre la caja de Over " + ValorOver ) ;
});

var MouseEnter = document.getElementById("center");
var ValorEnter = document.getElementById("centerval");
var ContadorEnter = parseInt(ValorEnter.innerHTML);
MouseEnter.addEventListener('mouseenter',function () {
    ContadorEnter = ContadorEnter + 1; 
    ValorEnter.innerHTML = ContadorEnter;
    console.log("Se ha pasado sobre la caja de Over " + ValorEnter ) ;
});

var MouseMove = document.getElementById("move");
var ValorMove = document.getElementById("moveval");
var ContadorMove = parseInt(ValorMove.innerHTML);
MouseMove.addEventListener('mousemove',function () {
    ContadorMove = ContadorMove + 1; 
    ValorMove.innerHTML = ContadorMove;
    console.log("Se ha pasado sobre la caja de Over " + ValorMove ) ;
});

//CLASE 132 - BROWSER OBJECT MODEL (Window Object)
// Algunos tipos de obejtos son SetInterval() y SetTimeout()
//Para los objetos window se puede escribir window.alert() es similar a solo escribir alert()
//alert("Muestra una alerta en la ventana");
//confirm("Coloca una seleccion de OK o Cancelar") OK = true | Cancelar = false
//prompt("Permite escribir y enviar una cadena de texto")
//window.open("www.google.com") Permite abrir la direccion ingresada
//window.close() Cierra la ventana en uso

//CLASE 133 - SCREEN AND NAVIGATOR OBJECT
//window.screen | Muestra detalles de la pagina como el ancho o alto
    //window.screen.width o window.screen.availWidth
    //window.screen.height o window.screen.availHeight
//window.navigator | Muestra caracteristicas e informacion del navegador web
    //window.navigator.userAgent
    //window.navigator.onLine puede salir true||false

//CLASE 134 - HISTORY AND LOCATION OBJECT 
//window.history | Muestra el historial de paginas accedidas en esa ventana
    //window.history.back() | Si existe retrocede una pagina 
    //window.history.forward() | Si existe avanza una pagina 
//window.location | indica detalles e informacion de la url de la pagina
    //window.location.href | Muestra la url completa
    //window.location.hostname | Muestra solo el hostname
    //window.location.pathname | Muestra solo el arbol de directorios0
    //window.location.assign('url') | 
