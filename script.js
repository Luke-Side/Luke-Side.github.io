var numeroSecreto = parseInt(Math.random() * 1000 + 1);
var tentativas = 11;


console.log(numeroSecreto)


//enquanto o chute for diferente do número secreto
while (chute != numeroSecreto) {
  var chute = prompt ('Digite um número entre 1 e 1000');
  tentativas = tentativas - 1;

//ao clicar em cancelar, automáticamente interrompe o jogo
  if (chute === null || chute === '') {
  alert('Você cancelou o jogo! ;-;')
  break;
  }
    
  alert('tentativas ' + tentativas)
  
  //se o chute for igual ao número secreto
  if (chute == numeroSecreto) {
    alert ('Nice, acertou!👍');
    break;
  } else if (chute > numeroSecreto) {
    alert('Errou, chuta mais baixo!')
  } else if (chute < numeroSecreto) {
    alert('Errou, ta pouco ainda!')
  }

//se acabar as tentativas
if (tentativas === 0){
  alert('Infelizmente suas tentativas acabaram, a resposta era ' + numeroSecreto);
  break;
 }
}