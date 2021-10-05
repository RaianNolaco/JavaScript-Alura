import { Cliente } from "./Cliente.js";

export class ContaCorrente{

    agencia;
    _cliente;
    _saldo  = 0; //#saldo = 0 
    static nomeroDeContas = 0;

    //construcor
    constructor(agencia,cliente){
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.nomeroDeContas += 1;
    }

    //getters and setters
    get cliente(){
        return this._cliente;
    }

    set cliente(Novovalor){
        if(Novovalor instanceof Cliente){
            this._cliente = Novovalor;
        }
    }

    get saldo(){
        return  this._saldo;
    }

    //funçoes
   sacar (valor){
       if(this._saldo >= valor){
           this._saldo -=valor;
           return valor;
       }
   }

   depositar(valor){
       //early return : quando colocamos verificaçoes e caso alguma delas passe o codigo para
       if(valor <= 0){       
           return;
       }
       this._saldo += valor;
   }

   transferir(valor,conta){

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

   }

}