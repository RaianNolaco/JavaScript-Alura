console.log(`criando listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `Rio de Janeiro`

);

const idadeComprador = 13;
const acompanhado = false;

console.log("Distinos disponives");
console.log(listaDeDestinos);
 
/*if(idadeComprador >= 18){

    console.log("Comprador maior de idade")
    listaDeDestinos.splice(1,1);
    console.log(listaDeDestinos);

}else{

    if(acompanhado){

        if(acompanhanteIdade >=  18){
            console.log("Menor de idade acompanhado")
            listaDeDestinos.splice(1,1);
            console.log(listaDeDestinos);

        }else{
            console.log("Não é permitido a venda para menores de idade sem acompanhantes maiores de idade");
        }

    }else{
        console.log("Não é permitido a venda para menores de idade sem acompanhantes");
    }
}*/

var temPassagem =false;
if(idadeComprador >= 18 || acompanhado){

    console.log("Venda autorizada")
    listaDeDestinos.splice(1,1);
    console.log(listaDeDestinos);
    temPassagem = true;

}else{ 
        console.log("Não é permitido a venda para menores de idade sem acompanhantes");
}



console.log("\n=== Embarque ===");
if((idadeComprador >=18 || acompanhado) && temPassagem){

    console.log("Boa viagem");

}else{

    console.log("Compre uma passagem para poder embarcar");
}

/*
console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);
*/