function BinarioADecimal(num) {
  // tu codigo aca
  let arreglo = num.split('').reverse();
  let total = 0;
  arreglo.forEach(function(element, index){
    if (element==='1'){
      total += Math.pow(2,index);
    }
  });
  return total;
  // return num.toString(10)
}

function DecimalABinario(num) {
  // tu codigo aca
  let div = num/2;
  let cociente = Math.trunc(div);
  let resto = num%2;
  if (cociente!==0){
    return DecimalABinario(cociente) + resto.toString();
  }else{
    return num.toString();
  }
  // 1) num=10 | cociente=5 | resto=0 | return DecimalABinario(5) + '0'
  // 2) num=5  | cociente=2 | resto=1 | return DecimalABinario(2) + '1'
  // 3) num=2  | cociente=1 | resto=0 | return DecimalABinario(1) + '0'
  // 4) num=1  | cociente=0 | resto=0 | return '1'
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}