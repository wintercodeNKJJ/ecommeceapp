import { Component, DoCheck } from '@angular/core';
import { ServiceService } from 'src/app/context/service.service';
import { Item } from '../interface/Item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements DoCheck {
  constructor(private service:ServiceService){}

  public visible:boolean = false;
  public cartItems:Array<{Item:Item,cnt:number}> = [];
  public total:number = 0;

  ngDoCheck(): void {
      this.visible = this.service.getViewChart()
      this.cartItems = this.service.cartItems
      this.calculate()
  }

  calculate(){
    let item:{Item:Item,cnt:number}
    for(item of this.cartItems ){
      this.total = this.total + (item.Item.price*item.cnt)
    }
  }

  remove(id:number): void{
    this.service.removeFromChart(id)
    console.log(id)
  }
}
