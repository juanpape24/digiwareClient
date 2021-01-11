import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoComponent } from './pedido/pedido.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  { path: 'productos', component: ProductoComponent },
  { path: 'productDetail/:ref', component: ProductDetailComponent },
  { path: 'pedido', component: PedidoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
