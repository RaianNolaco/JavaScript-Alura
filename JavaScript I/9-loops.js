console.log(`criando listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `Rio de Janeiro`

);

const idadeComprador = 13;
const acompanhado = false;
var temPassagem =false;
const destino = `salvador`;


console.log("Distinos disponives");
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || acompanhado);

let contador = 0;

while(contador < 3){

    console.log(listaDeDestinos[contador]);

    contador++
}