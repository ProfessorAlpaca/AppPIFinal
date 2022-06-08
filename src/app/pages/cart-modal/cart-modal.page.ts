import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProdutoPage } from 'src/app/paginas/produto/produto.page';
import { CarrinhoServicoService, ProdutoCarrinho } from 'src/app/services/carrinho-servico.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  carrinho: ProdutoCarrinho[] = []; 

  constructor(private servicoCarrinho: CarrinhoServicoService, private modalCtrl: ModalController) { }

  ngOnInit() {  
    this.carrinho = this.servicoCarrinho.getCarrinho();
  }

  removerItemCarrinho(produto) {
    this.servicoCarrinho.removerProdutoCarrinho(produto);
  }

  adicionarItemCarrinho(produto) {
    this.servicoCarrinho.adicionarProdutoCarrinho(produto);
  }

  tirarItemCarrinho(produto){
    this.servicoCarrinho.tirarProdutoCarrinho(produto);
  }

  getTotal() {
    return this.carrinho.reduce((i, j) => i + j.precoProduto * j.quantidadeProduto, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  checkout(){

  }
}
