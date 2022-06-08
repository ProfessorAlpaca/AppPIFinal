import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';
import { CarrinhoServicoService } from '../services/carrinho-servico.service';

@Component({
  selector: 'app-carrinho-funcional',
  templateUrl: './carrinho-funcional.page.html',
  styleUrls: ['./carrinho-funcional.page.scss'],
})
export class CarrinhoFuncionalPage implements OnInit {
  carrinho = [];
  produtos = [];
  quantidadeItensCarrinho: BehaviorSubject<number>; 

  constructor(private servicoCarrinho: CarrinhoServicoService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.produtos = this.servicoCarrinho.getProdutosCarrinho();
    this.carrinho = this.servicoCarrinho.getCarrinho();
    this.quantidadeItensCarrinho = this.servicoCarrinho.getcarrinhoQuantidadeItens();

  }

  adicionarAoCarrinho(produto) {
    this.servicoCarrinho.adicionarProdutoCarrinho(produto);

  }

   async abrirCarrinho(produto){
      let modal = await this.modalCtrl.create({
        component: CartModalPage,
        cssClass: 'cart-modal'
      });

      modal.present();



    }
  
  } 


