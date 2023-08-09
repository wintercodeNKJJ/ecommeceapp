import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/context/service.service';
import { Item } from '../interface/Item';

@Component({
  selector: 'app-item-ditails',
  templateUrl: './item-ditails.component.html',
  styleUrls: ['./item-ditails.component.scss']
})
export class ItemDitailsComponent implements OnInit {
  constructor(private service:ServiceService){}

  public Item!:Item;
  public quantity:number = 1;
  public chosen:number = 0;
  public selected:string = 'selected';

  setVisible(): void{
    this.service.setViewPics(true)
    console.log(this.service.viewPics);
  }

  add(): void{
    this.quantity++
  }

  sub(): void{
    this.quantity--
  }

  setImage(i:number){
    this.chosen = i;
  }


  send(){
    this.service.addTochart(this.Item,this.quantity)
  }

  ngOnInit(): void {
      this.Item = this.service.items[0]
  }

  pre(){
    this.chosen = this.chosen > 0? (this.chosen-1):this.chosen
  }

  next(){
    this.chosen = this.chosen < 3? (this.chosen +1):this.chosen
  }
}
