import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo",63999150942);
const cliente2 = new Cliente("Alice",32333210942);

const ContaCorrenteRicardo = new ContaCorrente(1001,cliente1);
const conta2 = new ContaCorrente(102,cliente2);

console.log(conta2);

ContaCorrenteRicardo.depositar(500);
ContaCorrenteRicardo.transferir(200,conta2);

console.log(cliente2.cpf);

console.log(ContaCorrenteRicardo);

console.log(ContaCorrente.nomeroDeContas);