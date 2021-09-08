// console.log('Início Aula JS!');
// console.log('Bem vindo ao curso');
// let idade = 26;
// let nome = 'Lucas';
// let peso = 96;
// console.log(idade);
// console.log(nome);
// console.log(peso);
// const Nome = 'Lucas'; //const não muda

//TIPOS PRIMITIVOS
// let nome = 'Lucas'; //String literal
// let idade = 25.6;  //Number Literal
// let aprovado = true; // Boolean
// let sobrenome; //Undefined
// let corSelecionada = null; // Redefinir ou inicializar zerado

//No Console, 'type of + variável' mostra o tipo da vaariável
//No Console CTRL+L limpa o console.

//OBJETO
// let pessoa = {
//     nome: 'Lucas',
//     idade: 26,
//     peso: 96.0,
//     altura: 175

// };
// console.log(pessoa);
// //ARRAYS
// let familia = [26,'Lucas',53,true];
// console.log(familia[0]);
// console.log(familia.length);//tamanho do vetor

// //FUNCTIONS
// corSite = 'Azul';
// function resetaCor(){
//     corSite = '';
// };
// console.log(corSite);
// resetaCor();
// console.log(corSite);

// function resetaCor2(cor,tonalidade){
//     corSite = cor + ' ' + tonalidade;
// };
// resetaCor2('Verde', 'Claro');
// console.log(corSite);

// //TIPOS DE FUNÇÕES
// //Realiza tarefa sem retorno

// function dizerNome(){
//     console.log('Lucas');
// };
// dizerNome();
// //Realiza tarefa com retorno

// function multiplicar(valor){
//     return valor*2;
// };
// let resultado = multiplicar(10);
// console.log(resultado);

// //OPERADORES
// //Igualdade estrita

// console.log(1 === 1); //compara o valor e o tipo. true, porque são numeros e sao iguais
// console.log('1' === 1); //false porque são iguais, mas um é numero e outro string

// //Operador ternário

// //É um tipo de if/else
// let pontos = 200;
// let tipo = pontos > 100 ? 'premium' : 'comum';
// //Lê-se: se pontos for maior que 100, então 'premium', se não 'comum'

// //CONDICIONAIS
// //Switch/Case

// let pesmissao;
// permissao = 'comum';
// switch (permissao) {
//     case 'comum':
//         console.log('Usuário Comum');
//         break;
//     case 'gerente':
//         console.log('Usuário Gerente');
//         break;
//     case 'diretor':
//         console.log('Usuário Diretor');
//         break;
    
//     default: //caso não caia em nenhuma
//         console.log('Usuário não reconhecido!');
// }

// //LAÇOS
// //For

// for(let i = 1; i <=5; i++) {
//     if(i % 2 !== 0){ //resto da divisão 'modulus'
//         console.log(i);
//     }
// }
// //While

// let i = 5;

// while (i >= 1){
//     if(i % 2 !== 0){ //resto da divisão 'modulus'
//         console.log(i);
//     }
//     i--;
// }
//Do..While

// i = 0;
// do{
//     console.log('digitando', i);
//     i++;
// }while(i < 10)
//For..in semelhante a for each

const pessoa = {
    nome: 'Lucas', //chave = nome value = 'lucas'
    idade: 26
};
for (let chave in pessoa){
    console.log(chave,pessoa);
}
const cores = ['Vermelho', 'Azul', 'Verde', 'Amarelo'];
for (let indice in cores){
    console.log(indice, cores[indice])
}
//For..of
for (let cor of cores){
    console.log(cor);
}