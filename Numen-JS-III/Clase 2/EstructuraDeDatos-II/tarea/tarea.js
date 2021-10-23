// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this._length = 0;
  this.head = null;

  LinkedList.prototype.add = function(value){
    var node = new Node(value);
    let current = this.head;

    // Si esta vacía
    if(!current){
      this.head = node;
      this._length++;
      return
    }
    // Si no esta vacía, la recorro
    while(current.next){
      current = current.next;
    }
    // Cuando llego al último, le agrego el nuevo nodo
    current.next = node;
    this._length++;
    return node;
  }

  LinkedList.prototype.remove = function(){
    let current = this.head;

    // Si esta vacía devuelvo null
    if(!current){
      return null;
    }
    // Si solo tiene un nodo
    if(!current.next){
      let ultNodo = current;
      current.next = null;
      this.head = null;
      this._length--;
      return ultNodo.value;
    }
    // Si no esta vacía, recorro hasta el último para eliminarlo y devolverlo
    while(current.next){
      // Si es el ante último, guardo el dato del último nodo y lo elimino de la lista
      if(current.next.next===null){
        let ultNodo = current.next;
        current.next = null;
        this._length--;
        return ultNodo.value;
      }
    }    
  }

  LinkedList.prototype.search = function(e){
    let current = this.head;

    // Reviso si "e" es una función o un string
    if(typeof e === 'function'){
      // Recorro para buscar el elemento
      while(current){
        if(e(current.value)){
          return current.value;
        }
        current = current.next;
      }
      return null;
    }else{
      // Recorro para buscar el elemento
      while(current){
        if(current.value === e){
          return current.value;
        }
        current = current.next;
      }
      return null;
    }
  }
}

function Node(value){
  this.value = value;
  this.next = null;
}

// Hash Table
// Una hash table contiene un arreglo de "contenedores" donde puede guardar información.
// Para guardar un valor asociado a una key (string):
//    - Correr la key a través de una función hash para transformarla a un número entero.
//    - Usar ese número como índice para ver en cuál contenedor guardarás el valor.
// Para buscar el valor por su key:
//    - Correr la key por la función hash para conseguir el número.
//    - Usar el número para buscar el contenedor donde está el valor.
//    - Devolver el valor.

function HashTable() {
  this.numBuckets = 35;
  this.buckets = {};
  this.keys = [];

  HashTable.prototype.hash = function(e){
    let letras = e.split('');
    let total = 0;
    
    letras.forEach( letra => total+=letra.charCodeAt() );
    return total%35;
  }

  HashTable.prototype.set = function(key, value){
    if(this.buckets.hasOwnProperty(this.hash(key))){
      this.coliciones(key,value)
    }
    this.keys.push(key);
    this.buckets[this.hash(key)] = value;
  }

  HashTable.prototype.get = function(key){
    return this.buckets[this.hash(key)];
  }

  HashTable.prototype.hasKey = function(key){
    return this.buckets.hasOwnProperty(this.hash(key));
  }

  HashTable.prototype.coliciones = function(key, value){
    let k = '';
    let i = 0;
    do{
      k = this.keys.filter(k => k===key);
      if(k===''){
        i++;
        k = k+i.toString();
      }
    }while(this.buckets.hasOwnProperty(this.hash(k)))
  }
  // String.fromCharCode(111); // Para volver al caracter
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
