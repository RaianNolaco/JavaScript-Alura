onsole.log(`criando listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `Rio de Janeiro`

);

console.log(listaDeDestinos);

//adicionando um item na lista
listaDeDestinos.push(`Curitiba`);

console.log(listaDeDestinos);
console.log(listaDeDestinos.length)
console.log(listaDeDestinos[0].length);

listaDeDestinos.push(`Acre`);
console.log(listaDeDestinos);


//==========================================

//pop remove o ulimo item da lista
listaDeDestinos.pop();
console.log(listaDeDestinos);

// .shift() => Remove o primeiro item da lista
// .unshift() => adiciona um item ao inico da lista


//splice(x,y) apaga regstros expecificos no caso do exemplo
//eles esta apagando da posição x em diante apague y registros   
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

