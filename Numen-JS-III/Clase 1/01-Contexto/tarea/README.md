
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiguen cual es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;  // error
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);  // 10
  console.log(a);  // 8
  var f = function(a, b, c) {
    b = a;
    console.log(b); // 8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9
}
c(8,9,10);
console.log(b); // 10
console.log(x); // error
```

```javascript
console.log(bar);  // error
console.log(baz);  // error
foo(); 
function foo() { console.log('Hola!'); } // ¿Por qué imprime 'Hola!' si la declaración de la función esta luego de su invocación?
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Nahuel";
if(true) {
    var instructor = "Cristian";
}
console.log(instructor);  // Cristian
```

```javascript
var instructor = "Nahuel";
console.log(instructor);  // Nahuel
(function() {
   if(true) {
      var instructor = "Cristian";
      console.log(instructor);  // Cristian
   }
})();
console.log(instructor);  // Nahuel
```
```javascript
var instructor = "Nahuel";
let pm = "Cristian";
if (true) {
    var instructor = "Fernando";
    let pm = "Alejandra";
    console.log(instructor);  // Fernando
    console.log(pm);  // Alejandra
}
console.log(instructor);  // Fernando
console.log(pm);  // Cristian
```
### Coerción de Datos

¿Qué crees que van dar estas operaciones?:

```javascript
6 / "3"         // 2
"2" * "3"       // 6
4 + 5 + "px"    // pensé que 45px pero era 9px
"$" + 4 + 5     // $45
"4" - 2         // 2
"4px" - 2       // pensé que error pero era NaN (Not-A-Number ó No es Un Número)
7 / 0           // pensé que error pero era "infinity"
{}[0]           // no sabía y era "undenfined"
parseInt("09")  // 9
5 && 2          // pensé que True pero era 2
2 && 5          // pensé que True pero era 5
5 || 0          // pensé que True pero era 5
0 || 5          // pensé que True pero era 5
[3]+[3]-[10]    // pensé que -4 pero era 23
3>2>1           // pensé que True pero era False
[] == ![]       // pensé que False pero era True
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output que vemos en consola luego de ejecutar este código? Explicar porque es así:

```javascript
function test() {
   console.log(a);  // pensé que 1 pero era "undefined". 
                    // Esto ocurre porque en este momento hay un espacio en memoria reservado para la variable "a" pero aún no está definido su valor.
   console.log(foo());  // 2. Porque es el valorq ue retorna la función "foo".

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este:

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);  // Pensé que retornaba "Snack" pero retorna "undefined".
                 // Esto ocurre porque existe un espacio en memoria reservado para la variable "snack",
                 // pero como no entra al IF no se le asigna un valor quedando "undefined".
```


### This

¿Cuál es el output que vemos en consola luego de ejecutar esté código? Explicar porqué es así:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Carlos Garcia',
   prop: {
      fullname: 'Pedro Guimenez',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());  // Pedro Guimenez

var test = obj.prop.getFullname;

console.log(test());  // definicion de la función, pero genera un error porque no tiene la propiedad "fullname".
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden del ouput? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}  // 1, 4, 3, 2

printing();
```
