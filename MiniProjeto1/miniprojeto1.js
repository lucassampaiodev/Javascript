let a = 'vermelho';
let b = 'azul';

let c = a; //guarda o valor de 'a' em outra variável
a = b;
b = c;

console.log('a = ', a);
console.log('b = ', b);