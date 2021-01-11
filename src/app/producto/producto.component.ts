import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductoService } from './producto.service'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  

  selectedProduct: Product | undefined;

  producto : Product = {
    referencia: "hola",
    nombre: "name",
    descripcion: "descripcion",
    descripcionCorta: "dcorta",
    image: "image",
    precio: "precio"
  };
  

  

  constructor(private productoService: ProductoService) { }
  productos: Product[] = [];
  

  ngOnInit(): void {
    this.getProductos();
  }

  onSelect(producto: Product): void {
    this.selectedProduct = producto;
  }

  getProductos(): void {    
    this.productoService.getProductos().subscribe(prods => this.productos = prods);
  }

 

}
