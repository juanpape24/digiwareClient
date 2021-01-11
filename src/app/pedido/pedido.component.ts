import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductoComponent } from '../producto/producto.component';
import { PedidoService } from './pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(private pedidoService: PedidoService) { }
  pedido: Pedido[] = [];



  ngOnInit(): void {
    this.pedidoService.pedido = this.pedido;
  }

  subtractUnidad(ped: Pedido): void {
    this.pedidoService.subtractUnidad(ped);
  }

  addUnidad(ped: Pedido): void {
    this.pedidoService.addUnidad(ped);
  }
  

}
