import { Injectable } from '@angular/core';
import { Pedido } from '../pedido';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  pedido: Pedido[] = [];

  add(prod: Pedido) {
    if (this.pedido.includes(prod)) {
      alert("Ya tiene este producto en el pedido, si quiere más unidades, añadalas desde la lista!!")
    } else {
      prod.unidades=1;
      this.pedido.push(prod);
      alert("añadido!")
    }
  }

  subtractUnidad(ped: Pedido): void {
    var index = this.pedido.indexOf(ped);
    ped.unidades -= 1;
    console.log(ped.unidades)
    if (ped.unidades == 0) {
      this.delete(index);
    } else {
      this.pedido[index] = ped;
    }

  }

  addUnidad(ped: Pedido): void {
    var index = this.pedido.indexOf(ped);
    console.log(ped)
    ped.unidades += 1;
    
    this.pedido[index] = ped;
  }

  delete(index: number) {

    this.pedido.splice(index, 1);

  }

  clear() {
    this.pedido = [];
  }
  constructor() { }
}
