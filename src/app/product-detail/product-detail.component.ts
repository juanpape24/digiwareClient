import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../pedido/pedido.service';
import { Product } from '../product';
import { ProductoService } from '../producto/producto.service'
import { Pedido } from '../pedido';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  producto : Product = {
    referencia: "",
    nombre: "",
    descripcion: "",
    descripcionCorta: "",
    image: "",
    precio: ""
  };

  pedido:Pedido ={
    producto: this.producto,
    unidades: 1
  };

  
  constructor(private productoService: ProductoService,
    private route: ActivatedRoute, private pedidoService: PedidoService) { }


  ngOnInit(): void {
    this.getProducto();
  }

  getProducto(): void {
    
    const ref = this.route.snapshot.paramMap.get('ref');
    this.productoService.getProducto(String(ref)).subscribe(pro=>this.producto=pro);
  }

  add(): void{    
    this.pedido.producto=this.producto;    
    this.pedidoService.add(this.pedido);
  }


}
