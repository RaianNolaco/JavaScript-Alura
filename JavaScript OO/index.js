import { Cliente } from "./Cliente.js";
import { ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf   = 63999150942;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf   = 32333210942;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.cliente = cliente1;
ContaCorrenteRicardo.agencia = 1001;
console.log(ContaCorrenteRicardo);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102
console.log(conta2);

ContaCorrenteRicardo.depositar(500);
ContaCorrenteRicardo.transferir(200,conta2);

console.log(conta2);
console.log(ContaCorrenteRicardo);