import { Component, DoCheck, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/context/service.service';
import { Item } from '../interface/Item';

@Component({
  selector: 'app-item-pictures',
  templateUrl: './item-pictures.component.html',
  styleUrls: ['./item-pictures.component.scss']
})
export class ItemPicturesComponent implements OnInit,DoCheck {
  constructor (private service: ServiceService){ }
  public show: boolean = false;
  public Item!:Item;
  public choosen:number = 0;
  public selected:string = 'selected';

  ngOnInit(): void {
      this.show = this.service.getViewPictures()
      this.Item = this.service.items[0]
  }

  ngDoCheck(): void {
      this.show = this.service.getViewPictures()
  }

  public closeView(): void{
    this.service.setViewPics(false)
  }

  setImage(i:number): void{
    this.choosen = i
  }

  pre(){
    this.choosen = this.choosen > 0? (this.choosen-1):this.choosen
  }

  next(){
    this.choosen = this.choosen < 3? (this.choosen +1):this.choosen
  }
}
