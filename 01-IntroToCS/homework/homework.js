'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // sumatoria n*2^i
  // 1,1,1,0 4-3-i=3
  // Por lo tanto: 10101
  // 1x2^4 + 0x2^3 + 1x2^2 + 0x2^1 + 1x2^0 = 16 + 0 + 4 + 0 + 1 = 21
  let decimal = 0;
  for (let i = 0; i < num.length; i++){
    let posicion = num.length -1 -i;
    let potencia = 2**i;
    decimal = decimal +  num[posicion]* potencia;
  }
  return decimal
}

function DecimalABinario(num) {
  // tu codigo aca
  // 5/2 = 1
  // 2/2 = 0
  // 1/2 = 1
  // 0
  let binario = '';
  while(num > 0){
    binario = num % 2 + binario
    num = Math.floor(num/2)
  }
  return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}