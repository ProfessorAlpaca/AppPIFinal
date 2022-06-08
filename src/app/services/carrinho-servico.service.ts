import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ProdutoCarrinho{
  idProduto: number;
  nomeProduto: string;
  precoProduto: number;
  quantidadeProduto: number;



}

@Injectable({
  providedIn: 'root'
})
export class CarrinhoServicoService {
  data: ProdutoCarrinho[] = [
    { idProduto: 1, nomeProduto: 'Big Smack', precoProduto: 11.00, quantidadeProduto: 1},
    { idProduto: 2, nomeProduto: 'Franta Uva', precoProduto: 5.00, quantidadeProduto: 1},
    { idProduto: 3, nomeProduto: 'Combo Smack Franta', precoProduto: 15.00, quantidadeProduto: 1},
    { idProduto: 4, nomeProduto: 'Batata Frita', precoProduto: 7.00, quantidadeProduto: 1},
    { idProduto: 5, nomeProduto: 'Combo Supreme', precoProduto: 21.00, quantidadeProduto: 1},
  ];

  private carrinho = [];
  private carrinhoQuantidadeItens = new BehaviorSubject(0);

  constructor() { }

  getProdutosCarrinho() {
    return this.data;
  }

  getCarrinho() {
    return this.carrinho;
  }

  getcarrinhoQuantidadeItens(){
    return this.carrinhoQuantidadeItens;
  }

  adicionarProdutoCarrinho(ProdutoCarrinho){
    let added = true;
    for(let p of this.carrinho) {
      if (p.idProduto === ProdutoCarrinho.idProduto){
        p.amount +=1;
        added = true;
        break;
      }
      
    }
    if (!added) {
      this.carrinho.push(ProdutoCarrinho);
    }
    this.carrinhoQuantidadeItens.next(this.carrinhoQuantidadeItens.value + 1);

  }

  removerProdutoCarrinho(ProdutoCarrinho){
    for (let [index, p] of this.carrinho.entries()) {
      if(p.idProduto === ProdutoCarrinho.id) {
        p.amount -= 1;
        if (p.amount = 0) {
          this.carrinho.splice(index, 1);
        }
      }
    }

    this.carrinhoQuantidadeItens.next(this.carrinhoQuantidadeItens.value - 1);
  

  }

  tirarProdutoCarrinho(ProdutoCarrinho){

    for(let [index, p] of this.carrinho.entries()) {
      if(p.idProduto === ProdutoCarrinho.id) {
        this.carrinhoQuantidadeItens.next(this.carrinhoQuantidadeItens.value - p.amount);
        this.carrinho.splice(index, 1);
      }
    }
    
  }
}
