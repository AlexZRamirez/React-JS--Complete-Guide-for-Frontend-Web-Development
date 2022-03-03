document.write("<h1>Hola mundo</h1>"); //Escritura de mensajes
console.log("Un mensjae de prueba"); //Mensaje normal
console.error("Surgio un problema de seguridad");//Mensaje de error
//var y let son para variables y const mantiene el mismo valor 
//en todo momento
//TIPOS DE DATOS
    //String (tipo 1) "Hola"
    var nombre1 = "John-117";
    //String (tipo 2) 'Hola'
    var nombre2 = 'Fred-104';
    //Numerico 1000
    var numero = 1000;
    //Float 2.2222
    var float1 = 1.11;
    var float2 = -1.155;
    //Boolean true/false
    var bool1 = true;
    var bool2 = false;
    //Array ['dato1','dato2','dato3'] | [1,2,3] | [true,false,true]
    /*Object 
        {
            "user": 'test',
            "score": 703.3,
            "hours": 10,
            "profs" : true
        }
    */
    document.write("TIPOS DE DATOS"+"<br>Nombre 1: " + nombre1 + "<br> Nombre 2: "+ nombre2);
    document.write("<br>Tu numero: "+ numero + "<br>Tu 1er float: " + float1 + "<br>Tu 2do float: " + float2);
    document.write("<br> Tu 1er bool: " + bool1 + "<br>Tu 2do bool: " + bool2);
    //CONCATENAR DATOS
    var FirstName = "John"; var LastName = " Carpenter"; var info = "<br><br>CONCATENAR DATOS<br>The Name: "; var thename = FirstName + LastName;
    document.write( info + thename);
    //OPERACIONES ARITMETICAS BASICAS
    var num1 = 15; var num2 = 25; 
    var operacion1 = num1 + num2;
    var operacion2 = num1 - num2; 
    var operacion3 = num1 * num2;
    var operacion4 = num1 / num2;
    var operacion5 = num2 % num1; 
    var operaciones = "<br> <br>OPERACIONES ARITMETICAS" + "<br>Es la operacion 1: " + operacion1 + "<br>Es la operacion 2: " + operacion2 + "<br>Es la operación 3: " + operacion3 + "<br>Es la operacion 4: " + operacion4+ "<br>Es la operacion 5: " + operacion5;
    document.write(operaciones);
    /*OPERADORES DE ASIGNACION
        var num1 = 20;
        var num1 += 10 es lo mismo num1 = num1 + 10
        var num1 -= 20 es lo mismo num1 = num1 - 20
        var num1 *= 30 es lo mismo num1 = num1 * 30
        var num1 /= 40 es lo mismo num1 = num1 / 40
        var num1 %= 2  es lo mismo num1 = num1 % 2
     */
    //COMPARADORES
    var menor = num1 < num2;
    var mayor = num1 > num2;
    var igual = num1 == num2;
    var difer = num1 != num2;
    var menorigual = num1 <= num2;
    var mayorigual = num1 >= num2;
    var texto = "<br><br>COMPARACION DE NUMEROS"+"<br>Numero 1: "+num1 +" | Numero 2: "+num2+"<br>menor que: " + menor + "<br>mayor que: " + mayor + "<br>igual que: " + igual + "<br>diferente de: " + difer + "<br>menor o igual que: " + menorigual + "<br>mayor o igual que: " + mayorigual;
    document.write(texto);

    //CONDICIONAL IF
    document.write("<br><br>CONDICIONAL IF");
    if(num1 == 15)
    {
        document.write("<br>El numero 1 vale "+num1);
    }

    if(menor == true)
    {
        document.write("<br>El numero "+ num1 + " es menor que  "+ num2);
    } else {
        document.write("Hay algo mal");
    }

    if (igual == true)
    {   
        document.write("<br>El numero "+num1+" es igual que "+num2);
    } else if(difer == true){
        document.write("<br>El numero "+num1+" es diferente de "+num2);
    }

    //OPERADORES LOGICOS &&, ||, !
    if(5 > 10 && 10 > 15) 
    {
        console.log(true)
    } else {
        console.log(false)
    }
    console.log(5 < 10 || 10 < 15)
    console.log(!(5 < 10))

    //OPERADOR TERNARIO (expression) ? a : b
    20 < 3 ? console.log(true) : console.log(false)

    //CONDICIONAL SWITCH
    document.write("<br><br>CONDICIONAL SWITCH");
    var card = "TarjetaDeCredito";
    switch(card)
    {
        case "TarjetaDeCredito":
            document.write("<br>Es una tarjeta de credito");
            break;
        case "TarjetaDeDebito":
            document.write("<br>Es una tarjeta de debito");
            break;            
        default:
            document.write("<br>No es ninguna de las anteriores");
            break;

    }
    document.write("<br><br>ITERACION WHILE<br>");
    //Iteracion While
    var count = 1;
    while(count <= 10)
    {
        document.write(count + "- ¡Hola Mundo!<br>");
        count = count + 1; //puede ser count++;
    }

    var count2 = 10;
    while (count2 >=1) 
    {
        document.write(count2 + "- ¡Adios Mundo!<br>");
        count2 = count2 - 1; //puede ser count--;            
    }
   
    //Iteracion for
    document.write("<br><br>ITERACION FOR");
    let nombres = ['john','fred','linda','kelly'];
    for(var i=0; i<=(nombres.length-1);i++)
    {
        document.write("<br>"+i+"- "+nombres[i]);
    }
    for (let j = (nombres.length-1); j >= 0; j--) {
        document.write("<br>"+j+"- "+nombres[j]);
        
    }
    for(i=0;i<3;i++)
    {
        document.write("<br>");
        for(j=0;j<3;j++)
        {
            document.write("*");
        }
    }

    var mList = [1, 2, 3, 4, 5];
    var pos;
    for(pos = 0; pos < mList.length; pos++) {
        if(pos % 2 === 0) {
        console.log('Posicion => ' + pos + ' Valor => ' + mList[pos])
        }
    }

    //TYPEOF
    var num1 = 10 // Integer
    var num2 = 10.9 // Decimal Number

    console.log(typeof(num1))
    console.log(typeof(num2))


    //CONVERSIONES DE DATOS
    var num1 = 10;
    var num2 = 20.3;

    // toString() number as input and returns a string
    console.log(num1.toString())
    console.log(num2.toString())

    var strNum1 = "10";
    var strNum2 = "11.5";
    var strNum3 = "ABC";

    // parseInt() string numeral as input and returns a number
    console.log(parseInt(strNum1));
    console.log(parseInt(strNum2));
    console.log(parseInt(strNum3));

    // parseFloat() string numeral as an input and returns a foating
    console.log(parseFloat(strNum2))
    console.log(parseFloat(strNum3))

    // toFixed() takes floating number and rounds it off to given position

    var strFloat = 87.987653;
    console.log(strFloat.toFixed())
    console.log(strFloat.toFixed(2))
    console.log(strFloat.toFixed(5))
    console.log(strFloat.toFixed(10))

    //DOUBLE QUOTE STRING
    //What if my string contains a double quote
    var doubleQuotesString = "This is a \"JavaScript\" string"
    console.log(doubleQuotesString)

    // What if my string contains a single quote
    var singleQuotesString = 'This is a \'JavaScript\' string'
    console.log(singleQuotesString)

    var doubleQuotesString2 = "This is a 'JavaScript' string"
    var singleQuotesString2 = 'This is a "JavaScript" string'

//FUNCIONES DE STRING

    var myFirstString = "This is a string for Javascript string functions, Javascript"

    // Returns the length of the string
    console.log(myFirstString.length)

    // Find index of a string inside another string
    console.log(myFirstString.indexOf('Javascript'))
    console.log(myFirstString.indexOf('This'))

    // Find LAST index of a string inside another string
    console.log(myFirstString.lastIndexOf('Javascript'))
    console.log(myFirstString.lastIndexOf('This'))

    // Get a part of our string slice(start, end)
    console.log(myFirstString.slice(0, 4))
    console.log(myFirstString.slice(21, 31))
    console.log(myFirstString.slice(-10))
    console.log(myFirstString.slice(5))

    // Get sub string function - substr(startPos, length)
    console.log(myFirstString.substr(0, 4))
    console.log(myFirstString.substr(21, 10))
    console.log(myFirstString.substr(21))

    var exampleString = "This is Javascript tutorial"

    // toUpperCase() - It converts our string -> uppercase characters
    console.log(exampleString.toUpperCase())

    // toLowerCase() - It converts our string -> lowercase characters
    console.log(exampleString.toLowerCase())

    // concat() - It merges two or more strings
    var firstName = "Javascript"
    var lastName = "Playground"
    console.log(exampleString.concat(firstName))
    console.log(exampleString.concat(' ', firstName, ' ', lastName))

    // We can also use '+' to concat two or more strings
    console.log(firstName + ' ' + lastName + ' ' + exampleString)

    // trim() - It removes extra spaces
    var extraSpaceString = '        mystring     '
    console.log(extraSpaceString.trim())

    var extraSpaceStringExample2 = '      my string    '
    console.log(extraSpaceStringExample2.trim())

    // charAt() -> this take a position as an arg and returns the character at that position
    var charAtExampleString = 'This is my test string'
    console.log(charAtExampleString.charAt(5))
    console.log(charAtExampleString.charAt(11))


    // split() splits our string on the basis of the arguments passed

    var sampleString = "This is my sample string"
    console.log(sampleString.split(' '))

    var sampleString2 = "This,is,my,sample,string"
    console.log(sampleString2.split(','))

    var sampleString3 = "This is awesome"
    console.log(sampleString3.split())

//NULL Y UNDEFINED
    var mVar //mvar holds no value
    console.log(mVar)

    mVar = null //mVar holds the value null
    console.log(mVar)

//COERCION IMPLICITA
    // var mStr = 'Hello'
    // var mNum = 5
    // var mSum = mStr + mNum

    // console.log(mSum);
    // console.log(typeof(mSum));

    // console.log('hola' + true);
    // console.log(typeof('hola' + true))

    // console.log(null + 'hola');
    // console.log(typeof(null + 'hola'))

    // console.log(50 + 'hola');
    // console.log(typeof(50 + 'hola'))


    if('Rocket' + 10) {
        console.log('True')
    } else {
        console.log('False')
    }
    //COERCION EXPLICITA
    var mNum = 15
    console.log(typeof(String(mNum)))
    console.log(typeof(String(true)))
    console.log(typeof(String(-98.10)))
    console.log(typeof(String(null)))
    console.log(typeof(String(undefined)))

    // To Number
    console.log(typeof(Number('2')))
    console.log(Number(true), typeof(Number(true)))
    console.log(Number(false), typeof(Number(true)))
    console.log(Number('-90.234'), typeof(Number('-90.234')))
    console.log(Number('apple'), typeof(Number('apple')))

    //To Boolean
    console.log(Boolean(1), typeof(Boolean(1)))
    console.log(Boolean(0), typeof(Boolean(0)))
    console.log(Boolean('Apple'), typeof(Boolean('Apple')))
    console.log(Boolean(null), typeof(Boolean(null)))
    console.log(Boolean(undefined), typeof(Boolean(undefined)))
    console.log(Boolean(''), typeof(Boolean('')))

    //OBJETOS

    // var mCars = {
    // 	"p1" : "350 kmph",
    // 	"gallardo" : '320 kmph',
    // 	"veyron" : '409 kmph',
    // 	"agera" : '429 kmph'
    // }

    // console.log(mCars)
    // console.log(typeof(mCars))


    var mAgera = {
        name: "Agera",
        manufacturer: {
            name: "Koenigsegg",
            loaction: "Sweden"
        },
        topSpeed: 429,
        color: "Black",
        spoilers: false,
        applyBrakes: function() {
            setTimeout(function() {
                console.log('Car Stopped');
            }, 5000)
        }
    }

    console.log(mAgera.name)
    console.log(mAgera.topSpeed)
    console.log(mAgera.manufacturer)
    console.log(mAgera.manufacturer.name)
    console.log(mAgera.applyBrakes())
    console.log(mAgera.applyBrakes)

//ARREGLOS
    var mFriends = ['Shaw', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina']
    console.log(mFriends)
    console.log(typeof(mFriends))

    console.log(mFriends[2])
    console.log(mFriends[0])
    console.log(mFriends[4])

    // Update a value
    mFriends[0] = 'Shawn'
    console.log(mFriends)

    // Add more items
    mFriends[6] = 'Alan'
    console.log(mFriends)

    // mFriends[10] = 'Tiffany'
    // console.log(mFriends)

    mFriends[mFriends.length] = 'Rob'
    console.log(mFriends)

    mFriends.push('Jack')
    console.log(mFriends)

    // Delete a value
    var mName = mFriends.pop()
    console.log(mName)
    console.log(mFriends)
    var mName = mFriends.pop()
    console.log(mName)
    console.log(mFriends)
    var mName = mFriends.pop()
    console.log(mName)
    console.log(mFriends)
    var mName = mFriends.pop()
    console.log(mName)
    console.log(mFriends)

    var mFriends = ['Shaw', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina']
    mFriends.splice(3, 0, 'Donna', 'Rachel')

    // 1st tells where to start
    // 2nd tells how many items to be deleted
    // 3rd and 4th and so on tells what items to  be added
    console.log(mFriends)

    mFriends.splice(0, 0, 'Harvey')
    console.log(mFriends)

    // Delete item at specific position
    mFriends.splice(2, 1)
    console.log(mFriends)

    mFriends.splice(0, 2)
    console.log(mFriends)

    // Concatenation
    var mOfficeFriends = ['Nina', 'Aron', 'Katie', 'Vic', 'Paula']
    var mAllFriends = mFriends.concat(mOfficeFriends)

    console.log('====================================')
    console.log(mFriends)
    console.log(mOfficeFriends)
    console.log(mAllFriends)

    //Sorting Ascending and Descending

    mAllFriends.sort()
    console.log(mAllFriends)

    mAllFriends.reverse()
    console.log(mAllFriends)

//FUNCIONES
    function mSum() {
        var num1 = 40;
        var num2 = 20;
        var sum = num1 + num2;
        
        return sum
        console.log('Im a print statement')
    }

    var totalSum = 100 + mSum()
    console.log(totalSum);

    // function greetings(personName) {
    // 	console.log('Welcome ' + personName);
    // }

    // greetings('Qaifi');
    // greetings('Nate')
    // greetings('Vijay')

    function totalSum(num1, num2, num3) {
        console.log('num1 => ' + num1);
        console.log('num2 => ' + num2);
        console.log('num3 => ' + num3);
        if(num3 !== undefined) {	
            console.log(num1 + num2 + num3)	
        } else {
            console.log(num1 + num2);
        }
    }

    totalSum(2, 7);
    // totalSum(22, 38, 33, 50, 43, 58);
    // totalSum();

//AMBITO Y ENTORNO
/*Se refiere a que las variables globales se pueden utilizar
en cualquier segmento del codigo, mientras que las funciones 
locales solo pueden utilizarse dentro de la misma funcion */
    var num1  = 10;
    function sum(num2) {
        var total = 0;
        console.log(total);
        total = num1 + num2;
    }

    sum(20);
    sum(50);

//ALMACENAMIENTO DE VARIABLES
    console.log(num1);
    num1 = 10;
    console.log(num1);
    var num1;
    console.log(str1);
    str1 = "String test";
    console.log(str1);
    var str1;

//ALMACENAMIENTO DE FUNCIONES
 /* suma(5,10)
    suma(30,22)
    function suma(num1,num2) {
        var total = num1 + num2;
        console.log(num1+num2);
    }
    suma(25,25);*/

    //var total = 10;
    var suma = function(num1,num2){
        total = num1 + num2;
        var total
        console.log(total);
    }
    suma(90,8);