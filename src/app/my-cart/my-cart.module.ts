import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCartRoutingModule } from './my-cart-routing.module';
import { MyCartComponent } from './my-cart.component';


@NgModule({
  declarations: [
    MyCartComponent
  ],
  imports: [
    CommonModule,
    MyCartRoutingModule
  ]
})
export class MyCartModule { }
