// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];
  for (const key in objeto) {
    if (Object.hasOwnProperty.call(objeto, key)) {
      array.push([key,objeto[key]]);
    }
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var ordenada = string.split('').sort();
  var anterior = ordenada[0];
  var cont = 0;
  var loop = 0;
  let objeto = {}
  ordenada.forEach(function(actual){
    loop++;
    if (actual===anterior){
      cont++;
    }else{
      objeto[anterior] = cont;
      cont=1;
    }
    if (loop === ordenada.length){
      objeto[anterior] = cont;
    }
    anterior = actual;
  })
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: cursoNUMEN -> NUMENcurso
  //Escribe tu código aquí
  var mayusculas = [];
  var minusculas = [];
  s = s.split('');

  s.forEach(function(el){
    if (el === el.toUpperCase()){
      mayusculas.push(el);
    }else{
      minusculas.push(el);
    }
  });

  return mayusculas.join('') + minusculas.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Numen Challenge is close!" || Devuelve ---> "ehT nemuN egnellahC si !esolc"
  //Escribe tu código aquí
  var palabras = [];
  var resultado = '';

  palabras = str.split(' ');

  palabras.forEach(function(palabra){
    resultado += palabra.split('').reverse().join('') + ' ';
  });

  return resultado.trim();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  if (numero.toString() === numero.toString().split('').reverse().join('')){
    return 'Es capicua';
  }else{
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var resultado = '';

  cadena.split('').forEach(function(el){
    if (el.toString().toUpperCase() !== 'A' && el.toString().toUpperCase() !== 'B' && el.toString().toUpperCase() !== 'C'){
      resultado+=el;
    }
  });

  return resultado;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var mapped = arr.map(function(el) {
    return { long:el.length , valor: el};
  })

  mapped.sort(function(a,b){
    if (a.long > b.long){
      return 1;
    }else if (a.long < b.long){
      return -1;
    }else{
      return 0;
    }
  });
  
  var resultado = mapped.map(function(el){
    return el.valor;
  });
  
  return resultado;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var resultado = arreglo1.filter(el => arreglo2.includes(el));
  return resultado;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

