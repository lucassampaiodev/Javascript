//Número divisível por 3 => Fizz
//Número divisível por 5 => Buzz
//Número divisível por 5 e por 3 => FizzBuzz
//Número não divisível por nenhum => retorna numero
const resultado = fizzBuzz(11);
console.log(resultado);

function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
        return 'Não é um Número';
    if((entrada % 3 === 0) && (entrada % 5 ===0))
        return 'FizzBuzz';
    if(entrada % 3 === 0)
        return 'Fizz';
    if(entrada % 5 === 0)
        return 'Buzz';

    return entrada;
}