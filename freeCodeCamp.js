//VARIABLES
console.log("Hola Mundo");

var miVariable = "freeCodeCamp";
console.log(miVariable);

//DIVISION
var cociente = 10 / 3;
console.log(cociente);

//RESTO DE UNA DIVISION (para verificar si un numero es par o impar)
var resto = 10 % 3;
console.log(resto);

//INCREMENTAR EL VALOR DE UNA VARIABLE
var x = 1;
console.log(x);

x = x + 1;
console.log(x);

x++;
console.log(x);

//REDUCIR EL VALOR DE UNA VARIABLE
var y = 10;
console.log(y);

y = y - 1;
console.log(y);

y--;
console.log(y);

//ASIGNACION DE UNA SUMA
var a = 30;
a = a + 5;
console.log(a);

a += 5;
console.log(a);

//ASIGNACION DE UNA RESTA
var b = 30;
b = b - 5;
console.log(b);

b -= 5;
console.log(b);

//ASIGNACION DE UNA MULTIPLICACION
var c = 20;
c = c * 2;
console.log(c);

c *= 2;
console.log(c);

//ASIGNACION DE UNA DIVISION
var d = 20;
d = d / 2;
console.log(d);

d /= 2;
console.log(d);

//ESCAPAR COMILLAS EN CADENA DE CARACTERES
var miCadena = 'Soy una cadena de carcteres "con comillas"';
console.log(miCadena);

/*SECUENCIAS DE ESCAPE
Codigo   |   Resultado
\'        Comilla Simple
\"        Comilla Doble
\\        Barra Invertida
\n        Linea Nueva
\r        Retorno de Carro
\t        Tabulacion
\b        Retroceso
\f        Salto de Pagina
*/

console.log("Estoy aprendiendo \nJavaScript");

//CONCATENAR CADENAS DE CARACTERES
var nombreCompleto = "Diego" + " " + "Sandoval";
console.log(nombreCompleto);

//CONSTRUIR CADENAS CON VARIABLES
var palabra = "programar";
var mensaje = "Estoy aprendiendo a " + palabra + " con freCodeCamp";
console.log(mensaje);

//AGREGAR VARIABLES A CADENA DE CARACTERES
var mensajeA = "Estoy aprendiendo a programar ";
var mensajeB = "con freCodeCamp";
mensajeA += mensajeB;
console.log(mensajeA);

//LONGITUD DE UNA CADENA DE CARACTERES
var miCadena;
miCadena = "A B";
console.log(miCadena.length);

//NOTACION DE CORCHETES (Primer Caracter)
var lenguajeDeProgramacion = "JavaScript";
/*
Cadena:    J a v a S c r i p t
Indices:   0 1 2 3 4 5 6 7 8 9
*/
console.log(lenguajeDeProgramacion[0]);

//INMUTABILIDAD DE CADENA DE CARACTERES
var cadenaA = "Jola, Mundo";
console.log(cadenaA);
cadenaA = "Hola, Mundo";
console.log(cadenaA);

//NOTACION DE CORCHETES (Enesimo Caracter)
var otraCadena = "JavaScript";
/*
Cadena:    J a v a S c r i p t
Indices:   0 1 2 3 4 5 6 7 8 9
*/
console.log(otraCadena[0]);
console.log(otraCadena[1]);
console.log(otraCadena[2]);
console.log(otraCadena[3]);
console.log(otraCadena[4]);
console.log(otraCadena[5]);
console.log(otraCadena[6]);
console.log(otraCadena[7]);
console.log(otraCadena[8]);
console.log(otraCadena[9]);

//NOTACION DE CORCHETES (Ultimo Caracter)
/*
El Ultimo indice siempre es la longitud -1. Porque comenzamos a contar desde 0
*/
var cadenaB = "JavaScript";
console.log(cadenaB[cadenaB.length - 1]);

//NOTACION DE CORCHETES (De Derecha a Izquierda)
var cadenaC = "JavaScript";
var n = 2;
console.log(cadenaC[cadenaC.length - n]);

//PALABRAS EN BLANCO o HISTORIAS LOCAS
/*
Concatena las cadenas para crear una cadena que muestre un mensaje.
Ejemplo: El perro negro corrio rapidamente a la tienda.
*/
var sustantivo = "perro";
var adjetivo = "negro";
var verbo = "corrio";
var adverbio = "rapidamente";

var palabrasEnBlanco =
  "El " +
  sustantivo +
  " " +
  adjetivo +
  " " +
  verbo +
  " " +
  adverbio +
  " a la tienda.";
console.log(palabrasEnBlanco);

//ARREGLOS
var miArreglo = ["Jhon", 24];
console.log(miArreglo);

var estudiantes = ["Nora", "Gino", "Emily", "Juan"];
console.log(estudiantes);

var notas = [95, 65, 89, 56];
console.log(notas);

//ARREGLOS ANIDADOS
var listasDeEstudiantes = [
  ["Nora", 97],
  ["Gino", 78],
];
console.log(listasDeEstudiantes);

var listaDeProductos = [
  ["Camisa Adidas kl", 15.99, "S134"],
  ["Camisa Adidas Star", 12.99, "S145"],
  ["Camisa Adidas Super", 16.99, "s150"],
];
console.log(listaDeProductos);

//ACCEDER A LOS ELEMENTOS DE UN ARREGLO
var otroArreglo = [10, 20, 30];
/*
Arreglo:  [10, 20, 30]
Indices:    0   1   2
 */
console.log(otroArreglo[0]); //10
console.log(otroArreglo[1]); //20
console.log(otroArreglo[2]); //30

//Podemos hacer diferentes operaciones con los elementos del arreglo
var suma = otroArreglo[0] + otroArreglo[1] + otroArreglo[2];
console.log(suma);

//MODIFICAR ELEMENTOS DE UN ARREGLO
var arregloB = [10, 20, 30];
arregloB[0] = 100;
arregloB[1] = "Diego";
arregloB[2] = [1, 2, 3];
console.log(arregloB);

//ACCEDER A ARREGLOS MULTIDIMENSIONALES
var arregloC = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
/*
Arreglo:         [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Indices:              0          1          2
Indices Internos:  0  1  2    0  1  2    0  1  2
*/
console.log(arregloC[0]); // [1, 2, 3]
console.log(arregloC[1]); // [4, 5, 6]
console.log(arregloC[2]); // [7, 8, 9]

console.log(arregloC[0][0]); // 1
console.log(arregloC[0][1]); // 2
console.log(arregloC[0][2]); // 3

//METODO .PUSH (agregar un elemento al final del arreglo)
var estaciones = ["Invierno", "Otoño", "Primavera"];
estaciones.push("Verano");
console.log(estaciones);

//METODO .POP (remover el ultimo elemento del arreglo)
var estacionesA = ["Invierno", "Otoño", "Primavera", "Verano"];
estacionesA.pop();
console.log(estacionesA);

var estaciones;
var estacion;
estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];
estacion = estaciones.pop();
console.log(estaciones);
console.log(estacion);

//METODO .SHIFT (remover el primer elemento del arreglo)
var estacionesB = ["Invierno", "Otoño", "Primavera", "Verano"];
estacionesB.shift();
console.log(estacionesB);

var estaciones;
var estacion;
estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];
estacion = estaciones.shift();
console.log(estaciones);
console.log(estacion);

//METODO .PUSH (agregar un elemento al principio del arreglo)
var estaciones = ["Invierno", "Otoño", "Primavera"];
estaciones.unshift("Verano");
console.log(estaciones);

//LISTAS DE COMPRAS
var miListaDeCompras = [
  ["Cereal", 3],
  ["Leche", 2],
  ["Galletas", 4],
  ["Pan", 5],
  ["Pollo", 7],
];
//Cereal
console.log(
  "Voy a Comprar " +
    miListaDeCompras[0][1] +
    " unidades de " +
    miListaDeCompras[0][0] +
    "."
);
//Leche
console.log(
  "Voy a Comprar " +
    miListaDeCompras[1][1] +
    " unidades de " +
    miListaDeCompras[1][0] +
    "."
);
//Galletas
console.log(
  "Voy a Comprar " +
    miListaDeCompras[2][1] +
    " unidades de " +
    miListaDeCompras[2][0] +
    "."
);
//Pan
console.log(
  "Voy a Comprar " +
    miListaDeCompras[3][1] +
    " unidades de " +
    miListaDeCompras[3][0] +
    "."
);
//Pollo
console.log(
  "Voy a Comprar " +
    miListaDeCompras[4][1] +
    " unidades de " +
    miListaDeCompras[4][0] +
    "."
);

//FUNCIONES
function mostrarMensaje() {
  console.log("¡Hola, Mundo!");
}
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();

//ARGUMENTOS (son los valores que le asignamos a los parametros)
function sumar(a, b) {
  var suma = a + b;
  console.log("El resultado de " + a + " + " + b + " es: " + suma);
}
sumar(5, 3);
sumar(8, 9);
sumar(5, 5);

function concatenarTresCadenas(cadena1, cadena2, cadena3) {
  console.log(cadena1 + " " + cadena2 + " " + cadena3);
}

concatenarTresCadenas("Estoy", "aprendiendo", "a programar");

//AMBITO GLOBAL
var miVariableGlobal = 5;
console.log(miVariableGlobal);

function miFuncion() {
  console.log(miVariableGlobal);
}

miFuncion();
console.log(miVariableGlobal);

//AMBITO LOCAL
function miFuncion() {
  var miVariableLocal = 4;
  console.log(miVariableLocal);
}

miFuncion();
console.log(miVariableLocal); // Error

//AMBITO GLOBAL vs AMBITO LOCAL
var miNombre = "Nora";

function mostrarMiNombre() {
  var miNombre = "Gino";
  console.log(miNombre);
}
mostrarMiNombre();

console.log(miNombre);

//RETORNAR UN VALOR
function sumar(a, b) {
  return a + b;
}
console.log(sumar(5, 3));

//UNDIFINED
function sumar(a, b) {
  console.log(a + b);
}
console.log(sumar(5, 3));

//ASIGNAR UN VALOR RETORNADO
function sumar(a, b) {
  return a + b;
}
var resultado = sumar(5, 3);
console.log(resultado);

function crearCadenaConMeta(lenguajeDeProgramacion) {
  return "Mi meta es aprender " + lenguajeDeProgramacion;
}
var miMeta = crearCadenaConMeta("JavaScript");
console.log(miMeta);

//PERMANECE EN FILA
/*
En informatica una cola (queue) es una estructura de datos abstracta en la cual los elementos se mantienen en orden. Los nuevos elementos se pueden añadir al final de la cola y los elementos previos se retiran del principio de la cola.
 
Define una funcion proximoEnFila que tome un arreglo (arreglo) y un numero (elemento) como argumentos. Agrega el numero al final del arreglo y luego elimina el primer elemento del arreglo. La funcion proximoEnFila debe retornar el elemento que fue removido.
*/
function proximoEnFila(arreglo, elemento) {
  arreglo.push(elemento); //Agregar al final del arreglo
  return arreglo.shift(); //Remover el primer elemento
}
var miArreglo = [1, 2, 3, 4, 5];
console.log("Antes: " + JSON.stringify(miArreglo));
console.log(proximoEnFila(miArreglo, 6));
console.log("Despues: " + JSON.stringify(miArreglo));

//VALORES BOOLEANOS
console.log(true);
console.log(false);

//OPERADOR DE IGUALDAD
console.log(5 == 5); //true
console.log(5 == 6); //false
console.log("hola" == "hola"); //true
console.log("hola" == "Hola"); //false

//OPERADOR DE IGUALDAD ESTRICTA
console.log(9 == 9); //true
console.log(9 == "9"); //true

console.log(9 === 9); //true
console.log(9 === "9"); //false

//OPERADOR DE DESIGUALDAD
console.log(9 != 6); //true
console.log(9 != 9); //false
console.log("JavaScript" != "JavaScript"); //false

//OPERADOR DE DESIGUALDAD ESTRICTA
console.log(9 !== 9); //false
console.log(9 !== "9"); //true

//OPERADOR "MAYOR QUE"
console.log(6 > 5); //true
console.log(5 > 6); //false
console.log("b" > "a"); //true
console.log("a" > "b"); //false
console.log("acb" > "abc"); //true

//OPERADOR "MAYOR o IGUAL QUE"
console.log(5 > 5); //false
console.log(5 >= 5); //true

//OPERADOR "MENOR QUE"
console.log(5 < 6); //true
console.log(6 < 5); //false
console.log("a" < "b"); //true
console.log("b" < "a"); //false

//OPERADOR "MENOR o IGUAL QUE"
console.log(5 < 5); //false
console.log(5 <= 5); //true

//OPERADOR LOGICO AND
/*
Tabla de verdad del operador AND
Para:  X && Y
|  X  |  Y  |  X && Y  |
-----------------------
|  T  |  T  |    T     |
|  T  |  F  |    F     |
|  F  |  T  |    F     |
|  F  |  F  |    F     |
La expresion solo es verdadera cuando ambos operadores son verdaderos.
*/
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

var a = 8;
console.log(a > 5 && a < 10); //true
console.log(a < 5 && a < 10); //false
console.log(a > 5 && a > 10); //false
console.log(a < 5 && a > 10); //false

//OPERADOR LOGICO OR
/*
Tabla de verdad del operador AND
Para:  X || Y
|  X  |  Y  |  X || Y  |
-----------------------
|  T  |  T  |    T     |
|  T  |  F  |    T     |
|  F  |  T  |    T     |
|  F  |  F  |    F     |
La expresion es verdadera si alguno de los dos operadores o ambos son verdaderos.
*/
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

var a = 8;
console.log(a > 5 || a < 10); //true
console.log(a < 5 || a < 10); //true
console.log(a > 5 || a > 10); //true
console.log(a < 5 || a > 10); //false

//OPERADOR LOGICO NOT
/*
Tabla de verdad del operador NOT
Para:  !X
|  X  | !X  |
-------------
|  T  |  F  |
|  F  |  T  |
*/
console.log(!true); //false
console.log(!false); //true

var a = 8;
console.log(!(a > 5)); //false
console.log(!(a < 5)); //true

//SENTENCIAS CONDICIONALES
if (true) {
  console.log("La condicion es verdadera.");
}

var x = 5;
if (x > 2) {
  console.log("La condicion es verdadera.");
}

var estacion = "Invierno";
if (estacion === "Invierno") {
  console.log("¡Si! Me encanta el invierno");
}

//CLAUSULA "ELSE"
if (false) {
  console.log("La condicion es verdadera.");
} else {
  console.log("La condicion es falsa.");
}

var x = 5;
if (x < 2) {
  console.log("La condicion es verdadera.");
} else {
  console.log("La condicion es falsa.");
}

var estacion = "Invierno";
if (estacion === "Verano") {
  console.log("¡Si! Me encanta el invierno");
} else {
  console.log("Todavia falta para el Invierno");
}

//CLAUSULA "ELSE IF"
function clasificarValor(valor) {
  if (valor % 2 == 0) {
    console.log("Divisible entre 2.");
  } else if (valor % 3 == 0) {
    console.log("Divisible entre 3.");
  } else {
    console.log("No es divisible entre las opciones.");
  }
}
clasificarValor();

//CONDICIONALES (Orden Logico)
function clasificarValor(valor) {
  if (valor < 5) {
    console.log("Menor que 5.");
  } else if (valor < 10) {
    console.log("Menor que 10.");
  } else {
    console.log("Mayor o igual a 10.");
  }
}
clasificarValor();

//ENCADENAR SENTENCIAS "IF...ELSE"
function interpretarIMC(indiceDeMasaCorporal) {
  if (indiceDeMasaCorporal < 18.5) {
    console.log("Bajo Peso");
  } else if (indiceDeMasaCorporal <= 24.9) {
    console.log("Normal");
  } else if (indiceDeMasaCorporal <= 29.9) {
    console.log("Sobrepeso");
  } else {
    console.log("Obeso");
  }
}
interpretarIMC();

//CODIGO DE GOLF
/*
En el juego de golf cada hoyo tiene un par que representa el numero promedio de golpes que se espera que haga un golfista para introducir la pelota en el hoyo.

Hay un nombre diferente dependiendo de que tan por encima o por debajo del par esten tus golpes.

Tu funcion tomara los argumentos par y golpes.

Retorna la cadena correcta segun esta tabla que muestra los golpes en orden de mayor a menor prioridad.

Golpes           Retornar
--------------------------
1                Hole-in-One!
<= par -2        Eagle
par -1           Birdie
par              Par
par +1           Bogey
par +2           Double Bogey
>= par +3........Go Home!

par y golpes siemore seran numericos y positivos.
*/
function puntajeDeGolf(par, golpes) {
  if (golpes == 1) {
    return "Hole-in-One!";
  } else if (golpes <= par - 2) {
    return "Eagle";
  } else if (golpes == par - 1) {
    return "Birdie";
  } else if (golpes == par) {
    return "Par";
  } else if (golpes == par + 1) {
    return "Bogey";
  } else if (golpes == par + 2) {
    return "Double Bogey";
  } else if (golpes >= par + 3) {
    return "Go Home!";
  }
}
console.log(puntajeDeGolf());

//SENTENCIAS SWITCH
function clasificarValor(valor) {
  var respuesta;
  switch (valor) {
    case 1:
      respuesta = "alpha";
      break;
    case 2:
      respuesta = "beta";
      break;
    case 3:
      respuesta = "gamma";
      break;
    case 4:
      respuesta = "delta";
      break;
  }
  return respuesta;
}
console.log(clasificarValor());

var producto = "hamburguesa";
switch (producto) {
  case "pizza":
    console.log("Las pizzas cuestan 9.99$");
    break;
  case "hamburguesa":
    console.log("Las hamburguesas cuestan 4.99$");
    break;
  case "hot dog":
    console.log("Los hot dogs cuestan 2.99$");
}

//SENTENCIA SWITCH (Opcion Predeterminada)
function seleccionarIdioma(valor) {
  var idioma;
  switch (valor) {
    case 1:
      idioma = "Español";
      break;
    case 2:
      idioma = "Frances";
      break;
    case 3:
      idioma = "Italiano";
      break;
    default:
      idioma = "Ingles";
      break;
  }
  return idioma;
}
console.log(seleccionarIdioma());

//SENTENCIA SWITCH (multiples casos)
function clasificarVolumen(valor) {
  var volumen;
  switch (valor) {
    case 1:
      volumen = "bajo";
      break;
    case 2:
    case 3:
      volumen = "intermedio";
      break;
    case 4:
    case 5:
    case 6:
      volumen = "alto";
      break;
  }
  return volumen;
}
console.log(clasificarVolumen());

//RETORNAR VALORES BOOLEANOS
function esMenorQue(a, b) {
  /*
  if (a < b) {
    return true;
  } else {
    return false;
  }
  */
  return a < b; // se puede resumir el condicional IF
}
console.log(esMenorQue());

//PATRON DE RETORNO ANTICIPADO
function miFuncion() {
  console.log("Hola");
  return "Mundo";
  console.log("Adios"); //lo que este despues de la sentencia retun no se va a reconocer y no se ejecuta
}
console.log(miFuncion());

function calcularRaizCuadrada(num) {
  if (num < 0) {
    return undefined;
  }
  return Math.sqrt(num);
}
console.log(calcularRaizCuadrada());

//CONTEO DE CARTAS
/*
En el juego de casino Blackjack el jugador puede sacarle ventaja a la casa llevando un registro del numero relativo de cartas altas y bajas que quedan en la baraja.

Esto se llama "conteo de cartas"

Tener mas cartas altas en la baraja es una ventaja para el jugador. Se le asigna un valor a cada carta de acuerdo a la siguiente tabla.

- Cuando el conteo es positivo, el jugador deberia apostar alto.
- Cuando el conteo es 0 o negativo, el jugador deberia apostar bajo.

Cambio del conteo      Cartas
-----------------------------
+1                     2, 3, 4, 5, 6
0                      7, 8, 9
-1                    10, 'J', 'Q', 'K', 'A'

Nuestra meta es definir una funcion para contar cartas.

La funcion debe tomar un parametro carta que puede ser un numero o una cadena de caracteres y luego aumentar o reducir el valor de la variable global conteo de acuerdo al valor de la carta (observa la tabla).

La funcion debe retornar una cadena de carcteres con el conteo actual y la cadena:
-"Apostar" si el conteo es positivo.
-"Esperar" si el conteo es cero o negativo.

La conteo actual y la decision del jugador ("Apostar" o "Esperar") deben estar separados por un espacio.
*/
var conteo = 0;
function contarCartas(carta) {
  var decision;
  switch (carta) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      conteo++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      conteo--;
      break;
  }
  if (conteo > 0) {
    decision = "Apostar";
  } else {
    decision = "Esperar";
  }
  return conteo + " " + decision;
}
console.log(contarCartas());

//CREAR OBJETOS
var miPerro = {
  nombre: "Black",
  edad: 15,
  peso: 10,
  raza: "caniche",
};

//ACCEDER A PROPIEDADES. (Notacion de Punto)
var miPerro = {
  nombre: "Black",
  edad: 15,
  peso: 10,
  raza: "caniche",
};
console.log(miPerro.nombre);
console.log(miPerro.edad);
console.log(miPerro.peso);
console.log(miPerro.raza);

//ACCEDER A PROPIEDADES. (Notacion de Corchetes)
var miCuaderno = {
  color: "verde",
  categoria: 3,
  "numero de paginas": 200,
  "numero de hojas": 100,
};
console.log(miCuaderno["color"]);
console.log(miCuaderno["categoria"]);
console.log(miCuaderno["numero de paginas"]);
console.log(miCuaderno["numero de hojas"]);

//ACCEDER A PROPIEDADES.(Variables)
var resultados = {
  1: "nora256",
  2: "gino577",
  3: "estef543",
  4: "kiara566",
};
var primero = 1;
var segundo = 2;
var tercero = 3;
var cuarto = 4;
console.log(resultados[primero]);
console.log(resultados[segundo]);
console.log(resultados[tercero]);
console.log(resultados[cuarto]);

//ACTUALIZAR PROPIEDADES
var mochila = {
  color: "azul",
  tamaño: "mediano",
  contenido: ["botella de agua", "cuaderno"],
};
console.log(mochila.color); //azul
mochila.color = "verde";
console.log(mochila.color); //verde

console.log(mochila.contenido);
mochila.contenido.push("lapiz");
console.log(mochila.contenido);
//tambien podemos hacer un arreglo nuevo
mochila.contenido = ["libro", "celular"];
console.log(mochila.contenido);

//AGREGAR PROPIEDADES
var curso = {
  titulo: "Aprende JavaScript desde Cero",
  idioma: "Español",
  duracion: "30 horas",
};
curso.nivel = "Basico";
console.log(curso.nivel);
curso["dificultad"] = "Media";
console.log(curso.dificultad);
console.log(curso);

//ELIMINAR PROPIEDADES
var curso = {
  titulo: "Aprende JavaScript desde Cero",
  idioma: "Español",
  duracion: "30 horas",
  nivel: "Basico",
};
console.log(curso.nivel);
delete curso.nivel;
console.log(curso.nivel);
console.log(curso);

//OBJETOS PARA BUSQUEDAS
function buscarElementoQuimico(simbolo) {
  /*
  var elementoQuimico;
  switch (simbolo) {
    case "Al":
      elementoQuimico = "Aluminio";
      break;
    case "S":
      elementoQuimico = "Azufre";
      break;
    case "Cl":
      elementoQuimico = "Cloro";
      break;
    case "He":
      elementoQuimico = "Helio";
      break;
    case "B":
      elementoQuimico = "Boro";
      break;
    case "Li":
      elementoQuimico = "Litio";
      break;
  }
  return elementoQuimico;
  */
  var simbolosQuimicos = {
    Al: "Aluminio",
    S: "Azufre",
    Cl: "Cloro",
    He: "Helio",
    B: "Boro",
    Li: "Litio",
  };
  return simbolosQuimicos[simbolo];
}
console.log(buscarElementoQuimico(""));

//VERIFICAR PROPIEDADES
var miCuaderno = {
  color: "verde",
  categoria: 3,
  precio: 4.56,
};
console.log(miCuaderno.hasOwnProperty("color")); //true
console.log(miCuaderno.hasOwnProperty("origen")); //false

function verificarPropiedad(obj, propiedad) {
  if (obj.hasOwnProperty(propiedad)) {
    return "Propiedad: " + obj[propiedad];
  } else {
    return "El objeto no tiene esta propiedad";
  }
}
var miCuaderno = {
  color: "verde",
  categoria: 3,
  precio: 4.56,
};
console.log(verificarPropiedad(miCuaderno, "color"));
console.log(verificarPropiedad(miCuaderno, "origen"));

//OBJETOS COMPLEJOS
var ordenesDePizzas = [
  {
    tipo: "margarita",
    tamaño: "individual",
    precio: 5.67,
    toppings: ["extra queso", "champiñones", "piña"],
    paraLlevar: true,
  },
  {
    tipo: "cuatro quesos",
    tamaño: "familiar",
    precio: 18.34,
    toppings: ["extra queso", "pimenton"],
    paraLlevar: false,
  },
  {
    tipo: "napolitana",
    tamaño: "individual",
    precio: 6.78,
    toppings: [],
    paraLlevar: true,
  },
];
console.log(ordenesDePizzas[0]);
console.log(ordenesDePizzas[1]);
console.log(ordenesDePizzas[0]["tipo"]); //margarita
console.log(ordenesDePizzas[0]["toppings"]);
console.log(ordenesDePizzas[2]);

//OBJETOS ANIDADOS
var miReceta = {
  descripcion: "mi postre favorito",
  costo: 15.6,
  ingredientes: {
    masa: {
      harina: "100 grs",
      sal: "1 cucharadita",
      agua: "1 taza",
    },
    cobertura: {
      azucar: "120 grs",
      chocolate: "4 cucharadas",
      mantequilla: "200 grs",
    },
  },
};
console.log(miReceta.descripcion);
console.log(miReceta.costo);
console.log(miReceta.ingredientes.masa);
console.log(miReceta.ingredientes.masa.harina);
console.log(miReceta["ingredientes"]["cobertura"]["azucar"]);

//ARREGLOS ANIDADOS
var misPlantas = [
  {
    tipo: "flores",
    lista: ["rosas", "tulipanes", "dientes de leon"],
  },
  {
    tipo: "arboles",
    lista: ["abeto", "pino", "abedul"],
  },
];
console.log(misPlantas[0]["lista"][0]);
var primeraFlor = misPlantas[0].lista[0];
console.log(primeraFlor);
var segundoArbol = misPlantas[1].lista[1];
console.log(segundoArbol);

//COLECCION DE DISCOS
/*
Tenemos un objetos que representa parte de una coleccion de albumes musicales.

Cada album tiene un numero de identificacion unico (id) asociado a otras propiedades.

No todos los albumes tienen la informacion completa.
*/
var coleccionDeDiscos = {
  7853: {
    tituloDelAlbum: "Bee Gees Greatest",
    artista: "Bee Gees",
    canciones: ["Stayin Alive"],
  },
  5439: { tituloDelAlbum: "ABBA Gold" },
};

/*
Define una funcion actualizarDiscos que tome los siguientes parametros:
-discos (el objeto que representa la coleccion de discos).
-id
-propiedad ("artista" o "canciones").
-valor

Tu meta es completar la funcion implementando las siguientes reglas para modificar el objeto pasado a la funcion:

-Si "valor" es una cadena vacia, elimina la propiedad del album correspondiente.

-Si "propiedad" es igual a la cadena de caracteres "canciones" pero el album no tiene una propiedad llamada "canciones", crea un arreglo vacio y agrega "valor" a ese arreglo.

-Si "propiedad" es igual a la cadena de caracteres "canciones" y "valor" no es una cadena vacia, agrega "valor" al final del arreglo de canciones del album correspondiente.

-Si "valor" no es una cadena vacia y "propiedad" no es igual a "canciones", asigna el valor del parametro "valor" a la propiedad. Si la propiedad no existe, debes crearla y asignar este valor.
*/
function actualizarDiscos(discos, id, propiedad, valor) {
  if (valor === "") {
    delete discos[id][propiedad];
  } else if (propiedad === "canciones") {
    discos[id][propiedad] = discos[id][propiedad] || [];
    discos[id][propiedad].push(valor);
  } else {
    discos[id][propiedad] = valor;
  }
}
console.log(coleccionDeDiscos[7853].tituloDelAlbum);
actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "");
console.log(coleccionDeDiscos[7853].tituloDelAlbum);
console.log(coleccionDeDiscos[5439].canciones);
actualizarDiscos(coleccionDeDiscos, 5439, "canciones", "Mamma Mia");
console.log(coleccionDeDiscos[5439].canciones);
console.log(coleccionDeDiscos[5439].artista);
actualizarDiscos(coleccionDeDiscos, 5439, "artista", "ABBA");
console.log(coleccionDeDiscos[5439].artista);

//CICLO WHILE
//ejemplo 1
var i = 0;
while (i <= 3) {
  console.log("Hola, Mundo");
  i++;
}

//ejemplo 2
var miArreglo = [];
var i = 0;
console.log(miArreglo);
while (i <= 10) {
  miArreglo.push(i);
  i++;
}
console.log(miArreglo);

//ejemplo 3
var numeros = [2, 3, 4, 5, 10, 15, 16, 19];
while (numeros.length > 4) {
  numeros.pop();
}
console.log(numeros);

//CICLO FOR
//ejemplo 1
var miArreglo = [];
for (var i = 0; i <= 10; i++) {
  miArreglo.push(i);
}
console.log(miArreglo);

//ejemplo 2
var miArreglo = [];
for (var i = 0; i <= 10; i += 2) {
  miArreglo.push("A");
}
console.log(miArreglo);

//CICLO FOR. (numeros impares)
var miArreglo = [];
for (var i = 1; i < 30; i += 2) {
  miArreglo.push(i);
}
console.log(miArreglo);

//CICLO FOR. (numeros pares)
var miArreglo = [];
for (var i = 2; i < 30; i += 2) {
  miArreglo.push(i);
}
console.log(miArreglo);

//CICLO FOR (Contar Hacia Atras)
//Ejemplo 1
for (var i = 15; i >= 10; i--) {
  console.log(i);
}

//Ejemplo 2
var miArreglo = [];
for (var i = 10; i > 0; i -= 2) {
  miArreglo.push(i);
}
console.log(miArreglo);

//ITERAR SOBRE UN ARREGLO CON UN CICLO "FOR"
//Ejemplo 1
var miArreglo = [4, 6, 8, 2];
var total = 0;
for (var i = 0; i < miArreglo.length; i++) {
  console.log("Iteracion " + i);
  console.log(miArreglo[i]);
  total += miArreglo[i];
}
console.log(total);

//Ejemplo 2
var lenguajes = ["JavaScript", "Python", "Java", "C++"];
for (var i = 0; i < lenguajes.length; i++) {
  console.log(lenguajes[i].toUpperCase());
}

//Ejemplo 3
function contarNumerosPares(arreglo) {
  var total = 0;
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      total++;
    }
  }
  return total;
}
console.log(contarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8])); // 4.  hay 4 numeros pares

//CICLOS FOR ANIDADOS
var miArreglo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (var i = 0; i < miArreglo.length; i++) {
  console.log("> Nueva Iteracion");
  // console.log(miArreglo[i]);
  var arregloAnidado = miArreglo[i];
  console.log("Arreglo: " + miArreglo[i]);
  for (var j = 0; j < arregloAnidado.length; j++) {
    console.log(">>> Ciclo Anidado");
    console.log("Elemento: " + arregloAnidado[j]);
    console.log(arregloAnidado[j]);
  }
}

//CICLO DO WHILE
var x;
x = 5;
do {
  console.log(x);
  x++;
} while (x < 10);

//BUSQUEDA DE PERFIL
var contactos = [
  {
    nombre: "Nora",
    apellido: "Nav",
    numero: "0543236543",
    gustos: ["pizza", "programacion"],
  },
  {
    nombre: "Harry",
    apellido: "Potter",
    numero: "0994372684",
    gustos: ["Hogwarts", "Magia"],
  },
  {
    nombre: "Sherlock",
    apellido: "Holmes",
    numero: "0487345643",
    gustos: ["Casos interesantes", "Violin"],
  },
];
function buscarPerfil(nombre, propiedad) {
  for (var i = 0; i < contactos.length; i++) {
    if (contactos[i].nombre === nombre) {
      return contactos[i][propiedad] || "La propiedad no existe.";
    }
  }
  return "El contacto no esta en la lista.";
}
console.log(buscarPerfil("", ""));

//NUMEROS ALEATORIOS
//Ejemplo 1
function generarFraccionAleatoria() {
  return Math.random(); // numeros entre 0 y 1
}
console.log(generarFraccionAleatoria());

//Ejemplo 2
console.log(Math.random());

//Ejemplo 3
var numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//NUMEROS ENTEROS ALEATORIOS
//Ejemplo 1
var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);
console.log(numeroAleatorioEntre0y19);

//Ejemplo 2
function generarEnteroAleatorio(limiteSuperior) {
  //Generar un entero aleatorio entre 0 y el limite superior (sin incluirlo).
  return Math.floor(Math.random() * limiteSuperior);
}
console.log(generarEnteroAleatorio());

//Ejemplo 3
function generarEnteroAleatorio(limiteSuperior) {
  return Math.floor(Math.random() * limiteSuperior);
}
for (var i = 0; i < 20; i++) {
  console.log(generarEnteroAleatorio());
}

//NUMEROS ENTEROS ALEATORIOS EN UN RANGO
//Ejemplo 1
function rangoAleatorio(limInferior, limSuperior) {
  return Math.floor(
    Math.random() * (limSuperior - limInferior + 1) + limInferior
  );
}
console.log(rangoAleatorio("", ""));

//Ejemplo 2
function rangoAleatorio(limInferior, limSuperior) {
  return Math.floor(
    Math.random() * (limSuperior - limInferior + 1) + limInferior
  );
}
for (var i = 0; i < 10; i++) {
  console.log(rangoAleatorio("", ""));
}

//FUNCION parseInt()
console.log(parseInt(""));

//Ejemplo 1
//var a = "5";
//var b = "7";
var a = parseInt("5");
var b = parseInt("7");
console.log(a + b);

//FUNCION parseInt() CON UNA BASE
//convertimos un numero binario a decimal
console.log(parseInt("110111", 2)); //55
console.log(parseInt(110111, 2)); //55

//convertimos Hexadecimal a decimal
console.log(parseInt("3E0A", 16)); //15882

//OPERADOR CONDICIONAL (Ternario)
//Ejemplo 1
function retornarMinimo(x, y) {
  /*  if (x < y) {
    return x;
  } else {
    return y;
  }
}
console.log(retornarMinimo(1, 2));
*/
  return x < y ? x : y;
}
console.log(retornarMinimo(1, 2));

//Ejemplo 2
var a = 5;
var b = 9;
console.log(a > b ? a + 2 : b * 3); //27

//MULTIPLES OPERADORES CONDICIONALES
function compararNumeros(a, b) {
  return a == b
    ? "a y b son iguales"
    : a > b
    ? "a es mayor que b"
    : "b es mayor que a";
}
console.log(compararNumeros());

//VAR vs LET
var campista = "Juan";
var campista = "Diego";
console.log(campista);

let campista = "Juan";
let campista = "Diego";
console.log(campista); // Error. No se puede declarar variables con let 2 veces

//AMBITO de VAR vs LET
let mostrarColor = true;
if (mostrarColor) {
  let color = "verde";
  console.log("Mi color favorito es : " + color);
}
console.log(color); // Error. No se puede usar variables declaradas con let de forma local.

//CONST
const miConstante = 35;
console.log(miConstante);
miConstante = 15; //Error. las variables declaradas con const no se pueden modificar.

function calcularAreaCirculo(radio) {
  var PI = 3.14;
  if (radio < 0) {
    return undefined;
  }
  return PI * radio ** 2;
}
console.log(calcularAreaCirculo());

//MUTAR ARREGLO DECLARADO CON CONST
const miArreglo = [1, 2, 3, 4];
miArreglo[0] = 5;
miArreglo[1] = 6;
miArreglo[2] = 7;
miArreglo[3] = 8;
console.log(miArreglo);

//CREAR UN OBJETO INMUTABLE
let colores = {
  verde: "#10e04b",
  azul: "#1b50e0",
  negro: "#000000",
  blanco: "#ffffff",
};
Object.freeze(colores);
console.log(colores);

//FUNCIONES FLECHA
/*
const fecha = function () {
  return new Date();
};
*/
const fecha = () => new Date();

//FUNCIONES FLECHA CON PARAMETROS
/*Ejemplo 1
const sumarTres = function (x) {
  return x + 3;
};
console.log(sumarTres());
*/
const sumarTres = (x) => x + 3;
console.log(sumarTres());

/*Ejemplo 2
const concatenarArreglos = function (arr1, arr2) {
  return arr1.concat(arr2);
};
console.log(concatenarArreglos([1, 2], [3, 4, 5]));
*/
const concatenarArreglos = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenarArreglos([1, 2], [3, 4, 5]));

/*Ejemplo 3
const sumar = function (a, b) {
  let num = 6;
  return a + b + num;
};
console.log(sumar());
*/
const sumar = (a, b) => {
  let num = 6;
  return a + b + num;
};
console.log(sumar());

//VALORES POR DEFECTO PARA PARAMETROS
const incrementar = (num, valor = 1) => num + valor;
console.log(incrementar());

//OPERADOR REST
//Ejemplo 1
function miFuncion(...args) {
  console.log(args);
}
miFuncion([1, 2, 3], [3, 4, 5]);

//Ejemplo 2
const sumar = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
console.log(sumar());

//OPERADOR SPREAD
const numeros = [1, 2, 3];
function sumar(x, y, z) {
  return x + y + z;
}
console.log(sumar(...numeros));

//SINTAXIS DE DESESTRUCTURACION
//Ejemplo 1
const usuario = {
  nombre: "Gino Smith",
  edad: 34,
};
/*
const nombre = usuario.nombre
const edad = usuario.edad
*/
const { nombre, edad } = usuario;
console.log(nombre, edad);

//Ejemplo 2
var coordenadas = {
  x: 4,
  y: 6,
  z: 12,
};
const { x, y, z } = coordenadas;
console.log(x);
console.log(y);
console.log(z);

//SINTAXIS DE DESESTRUCTURACION. Objetos Anidados
//Ejemplo 1
const usuarioA = {
  HarryPotter: {
    estado: activo,
    ocupacion: "auror",
  },
};
const {
  HarryPotter: { estado, ocupacion },
} = usuarioA;
console.log(estado);
console.log(ocupacion);

//Ejemplo 2
var pronosticoLocal = {
  ayer: {
    minima: 14,
    maxima: 22,
  },
  hoy: {
    minima: 12,
    maxima: 22,
  },
  mañana: {
    minima: 12,
    maxima: 19,
  },
};
/*
var minimaHoy = pronosticoLocal.hoy.minima;
var maximaHoy = pronosticoLocal.hoy.maxima;
console.log(minimaHoy, maximaHoy);
*/
var {
  hoy: { minima: minimaHoy, maxima: maximaHoy },
} = pronosticoLocal;
console.log(minimaHoy, maximaHoy);

//SINTAXIS DE DESESTRUCTURACION. Arreglos
var a = 8;
var b = 6;

[b, a] = [a, b];
console.log("a: " + a); // a: 6
console.log("b: " + b); // b: 8

//SINTAXIS DE DESESTRUCTURACION. Operador Rest
var a;
var b;
var arr;

[a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7];
console.log(a);
console.log(b);
console.log(arr);

//otro ejemplo
var arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8];
function removerTresPrimerosElementos(arreglo) {
  var [, , , ...nuevoArreglo] = arreglo;
  return nuevoArreglo;
}
var arregloFinal = removerTresPrimerosElementos(arregloInicial);
console.log(arregloFinal);

//SINTAXIS DE DESESTRUCTURACION. Pasar Objeto como Argumento.
var nuevoPerfilCliente = {
  nombre: "Jane Doe",
  edad: 24,
  nacionalidad: "española",
  ubicacion: "España",
};
/*
var actualizarPerfil = (informacionDePerfil) => {
  console.log(informacionDePerfil);
  var { nombre, edad, nacionalidad, ubicacion } = informacionDePerfil;
  console.log(nombre);
  console.log(edad);
  console.log(nacionalidad);
  console.log(ubicacion);
};
actualizarPerfil(nuevoPerfilCliente);
*/
var actualizarPerfil = ({ nombre, edad, nacionalidad, ubicacion }) => {
  console.log(nombre);
  console.log(edad);
  console.log(nacionalidad);
  console.log(ubicacion);
};
actualizarPerfil(nuevoPerfilCliente);

//otro ejemplo
var estadisticas = {
  max: 56.78,
  desviacionEstandar: 4.34,
  mediana: 34.54,
  moda: 23.87,
  min: -0.75,
  promedio: 35.85,
};
var puntoMedio = ({ max, min }) => (max + min) / 2;
console.log(puntoMedio(estadisticas)); // 28.015

//PLATILLAS LITERALES o PLATILLAS DE CADENAS
/*
Caracteristicas:
-Se usa el acento invertido (backtick)` en lugar de comillas.
-Pueden contener comillas simples y dobles.
-Las lineas se preservan como se escriben en el codigo.
-Para reemplazar una variable se escribe ${variable}.
-Dentro de &{} tambien puedes escribir expresiones.
*/
//Ejemplo 1
var a = 6;
console.log(`El valor de a es ${a}`);

//Ejemplo 2
var nombreA = "Nora";
var edadA = 16;
console.log(`Mi nombre es ${nombreA} y tengo ${edadA} años.`);

//Ejemplo 3
var miArreglo = [1, 2, 3, 4];
console.log(`El arreglo es ${miArreglo}`);
console.log(`El arreglo es ${JSON.stringify(miArreglo)}`);

//Ejemplo 4
var persona = {
  nombre: "Gino Cass",
  edad: 10,
};
var saludo = `¡Hola! Mi nombre es ${persona.nombre} y tengo ${persona.edad} años.`;
console.log(saludo);

//CREAR OBJETOS DE FORMA CONCISA
/*
var crearPersona = (nombre, edad, idioma) => {
  return {
    nombre: nombre,
    edad: edad,
    idioma: idioma,
  };
};
console.log(crearPersona("Diego Sandoval", 37, "Español"));
*/

var crearPersona = (nombre, edad, idioma) => ({ nombre, edad, idioma });
console.log(crearPersona("Diego Sandoval", 37, "Español"));

//METODOS
/*
var persona = {
  nombre: "Isabel",
  presentarse: function () {
    return `¡Hola! Mi nombre es ${this.nombre}`;
  },
};
console.log(persona.presentarse());
*/
var persona = {
  nombre: "Isabel",
  presentarse() {
    return `¡Hola! Mi nombre es ${this.nombre}`;
  },
};
console.log(persona.presentarse());

//DEFINIR UNA CLASE
class TransbordadorEspacial {
  constructor(planeta) {
    this.planeta = planeta;
  }
}
var zeus = new TransbordadorEspacial("Jupiter");
console.log(zeus.planeta);
var apollo = new TransbordadorEspacial("Marte");
console.log(apollo.planeta);

//otro ejemplo
class Mascota {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
var miMascota = new Mascota("Nora", 5);
console.log(miMascota.nombre);
console.log(miMascota.edad);

//GETTERS Y SETTERS
class Libro {
  constructor(autor) {
    this._autor = autor;
  }
  get autor() {
    return this._autor;
  }
  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  }
}
var libro = new Libro("anonimo");
console.log(libro.autor);

libro.autor = "Gino Smith";
console.log(libro.autor);
