//CLASE 143 - INTRO A POO
var video = {
    nombreVideo : "Introducción a JS",
    formatoVideo : "mkv",
    duracion : "20:30",
    propietario : "Udemy",
    getNombreVideo : function(){
        return this.nombreVideo
    },
    getFormatoVideo : function(){
        return this.formatoVideo
    },
    getDuracion : function(){
        return this.duracion
    },
    getPropietario : function(){
        return this.propietario
    }
}

var str1 = "Video: " + video.getNombreVideo() +"\nFormato: "+ video.getFormatoVideo();
var str2 = "\nDuración: "+video.getDuracion() + "\nPropietario: " + video.getPropietario();
console.log(str1 + str2)
document.write(str1 + str2);

//CLASE 144 - USO DE "THIS"

    var Nombre = "Linda";
    var persona = {
        Nombre : "John",
        fechaNacimiento : 1980,
        trabajo : "Soldado",
        getNombre : function(){
            console.log(Nombre)
            console.log(this.Nombre)
        },
        parientes : {
            Nombre : "Fred",
            fechaNacimiento : 1985,
            trabajo : "Soldado",
            getNombre : function(){
                console.log(this.Nombre)
            }
        }
    }
    persona.getNombre();
    persona.parientes.getNombre();

//CLASE 145 - FUNCIONES DE CONSTRUCTOR (CLASES)
var persona = {
    nombre : "Jun",
    fechaNacimiento : 1990,
    trabajo : "Agente de ONI"
}

function Persona(pNombre, pFechaNacimiento, pTrabajo){
    this.nombre = pNombre;
    this.fechaNacimiento = pFechaNacimiento;
    this.trabajo = pTrabajo;

    this.calcularEdad = function(){
        console.log(2019 - this.fechaNacimiento)
    }
}

var john = new Persona('Jhon', 1992, "Soldado");
john.calcularEdad();
var linda = new Persona("Linda", 1994, "Soldado");
linda.calcularEdad();

//CLASE 146 | CLASE 147 - implementacion de prototyppe

//CLASE 150 - INTRODUCCION A JSON

//CLASE 151 - INTRODUCCION A AJAX | CLASE 152 | CLASE 153