import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrinhoFuncionalPageRoutingModule } from './carrinho-funcional-routing.module';

import { CarrinhoFuncionalPage } from './carrinho-funcional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrinhoFuncionalPageRoutingModule
  ],
  declarations: [CarrinhoFuncionalPage]
})
export class CarrinhoFuncionalPageModule {}
