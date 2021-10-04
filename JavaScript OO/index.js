class Cliente{

     nome;
     cpf;
     agencia;
     saldo; 
     rg;   
}

const cliente1 = new Cliente();
const cliente2 = new Cliente()

cliente1.nome = "Ricardo";
cliente1.cpf   = 63999150942;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 12312334;

cliente2.nome = "Alice";
cliente2.cpf   = 32333210942;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);