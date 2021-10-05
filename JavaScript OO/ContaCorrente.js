import { Cliente } from "./Cliente.js";

export class ContaCorrente{

    agencia;
    _cliente;
    
    set cliente(Novovalor){
        if(Novovalor instanceof Cliente){
            this._cliente = Novovalor;
        }
    }

    get cliente(){
        return this._cliente;
    }


    //#saldo = 0
    _saldo  = 0; 

    get saldo(){
        return  this._saldo;
    }


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