import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf   = 63999150942;


const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.cliente = cliente1;
ContaCorrenteRicardo.agencia = 1001;
 
const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();
conta2.cliente.nome = "Alice";
conta2.cliente.cpf   = 32333210942;
conta2.agencia = 102
console.log(conta2);

ContaCorrenteRicardo.depositar(500);
ContaCorrenteRicardo.transferir(200,conta2);

console.log(conta2.cliente);
console.log(ContaCorrenteRicardo);