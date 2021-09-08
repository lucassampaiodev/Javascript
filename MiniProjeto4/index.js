//Velocidade máx 70
//A cada 5 acima do limite, ganha 1 ponto na carteira
//Math.floor arredonda o número para inteiro
//Caso exceda 12 pontos, carteira é suspensa

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if(velocidade <= velocidadeMaxima)
        console.log('Dentro do normal')
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
       if(pontos >= 12)
            console.log('Carteira Suspensa por exceder 12 pontos');
       else
            console.log('Pontos',pontos);
}
}
verificarVelocidade(130);