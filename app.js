alert('Boas vindas ao jogo do numero secreto!');
let numeroMaximo = 10;
let numeroSecreto = parseInt (Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute; 
let tentativas = 1;
//enquanto chute não for igual ao numero secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}.`);
    //se o numero secreto é igual ao chute
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
        alert (`O número secreto é menor que ${chute}!`);
        } else {
        alert (`O número secreto é maior que ${chute}!`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o numero secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}`);
