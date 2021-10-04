
const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `Rio de Janeiro`

);

const idadeComprador = 20;
const acompanhado = false;
var temPassagem =false;
const destino = `Salvador`;


console.log("Distinos disponives");
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || acompanhado);

let destidoExiste = false;

/*while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        destidoExiste = true;
        break;
    }
    contador++
}*/

for(let i = 0; i <3; i++){
    if(listaDeDestinos[i] == destino){
        destidoExiste = true;
        break;
    }
}

console.log("Destino existe : ",destidoExiste);

if(destidoExiste && podeComprar){
    console.log("Boa viagem");
}else{
    console.log("Desculpe ocorreu um erro, tente novamente mais tarde.");
}
