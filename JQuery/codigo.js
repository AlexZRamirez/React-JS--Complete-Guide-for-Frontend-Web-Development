//SELECTORES Y FILTROS
//$(selector).method()
/*$ - se utiliza para accesar en jquery
  El selector es utilizado para encontrar elementos HTML
  method() - Es utilizado para hacer alguna accion en el elemento seleccionado
  Los selectores son usados para seleccionar elementos HTML usando selectores como CSS
  Ejemplo - $('p')*/
  console.log($('input'))
  console.log($('input[type]'))
  console.log($('input[type=text]'))
/*Se utiliza un "." si es clase y "#" si es id
En una lista de elementos se puede seleccionar todos los elementos de la lista, el utlimo
o el primero Ejemplo:*/ 
//$(.list-item)
//$(.list-item).first()
//$(.list-item).last()
//$(.list-item).eq(2) | Devuelve el valor del tercer elemento de la lista

//Una forma de realizar manipulaciones a la pagina de manera segura con JQuery, es utilizando document.ready()
$(document).ready(function(){
    console.log("Es un texto en JQuery")
})

//Agregar o Actualizar elementos HTML
/*El metodo html() en JQuery es el equivalente de innerHTML en javascript.
Se puede usar html() para obtener contenido de un elemento seleccionado de HTML
Su sintaxis es:
-Para obtener valores $('selector').html()
-Para fijar valores $('selector').html(childElement)
Si se deseara eliminar un elemento de lista se debe utilizar:
$('li').first().remove() o $('li').eq(5).remove() */

//Agregar o Actualizar estilos CSS
/*Para obetener el estilo CSS de un elemento HTML se utilza el metodo css().
Su sintaxis es la siguiente:
$('selector').css("property-name") */
/*$('section').css('background-color') | Muestra el valor de la propiedad
  $(#count).css('font-size') | Muestra el valor de la propiedad
  |En este caso se asignan valores a las propiedades de dicho elemento
  $(#count).css({
      'font-size' : '24px',
      'color' : 'red'
  }) 
  $(.item).css('font-size', '15px') | Se puede editar una sola propiedad 
  ***CODIGO CSS***
  .dark-Card {
      background-color : blue;
      color : white;
  }

  $('.lista').addClass('dark-Card') | Se manda a llamar las propiedades definidas y se asignan con addClass
  s
  */

  //Manejar eventos de HTML
  /*Se puede utilzar el nombre del evento seguido de los parentesis
    $('selector').event-name(function(){
        --Acciones cuando el evento es activado
    }) 
    Para utilizar el evento, se debe llamar el elemento en formato de JQuery.
    Ejemplo: 
    var btnAgregar = $('add-item');
    btnAgregar.click(crearElemento);

    Hay eventos que requieren de un evento previo, como es el caso del input
    inputBox.on({
        'input' : function(e) {
            valorActual = e.target.value;
        },
        'keyup' : function(e){
            if(e.keyCode == 13){
                crearElemento()M
            }
        }
    })

    para mostrar un valor en el input se utiliza:
    inputBox.val('')
    */

    //Llamadas de AJAX en JQuery
    /*JQuery soporta llamadas de AJAX y otorga acceso a los metodos para hacer llamadas HTTP
      La sintaxis es : $.get(URL,callback); | La funcion callback es llamada cuando la solicitud se completo*/