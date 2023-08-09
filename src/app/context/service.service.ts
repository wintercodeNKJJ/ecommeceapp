import { Injectable } from '@angular/core';
import {Item} from '../components/interface/Item';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  public viewPics:boolean = false;
  public viewChart:boolean = false;
  public sidebarVisible:boolean = false;

  public items:Item[] = [
    {
      id:0,
      headline:'SNEAKER COMPANY',
      title:'Fall Limited Edition Sneakers',
      note:'These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
      price:125.00,
      reduction:50,
      oldprice:250,
      pictures:['../../../assets/images/image-product-1.jpg','../../../assets/images/image-product-2.jpg','../../../assets/images/image-product-3.jpg','../../../assets/images/image-product-4.jpg'],
      thumbnails:['../../../assets/images/image-product-1-thumbnail.jpg','../../../assets/images/image-product-2-thumbnail.jpg','../../../assets/images/image-product-3-thumbnail.jpg','../../../assets/images/image-product-4-thumbnail.jpg']
    }
  ]

  public setViewPics(value:boolean){
    this.viewPics = value
  }

  public getViewPictures(): boolean{
    return this.viewPics
  }

  public setViewChart(){
    this.viewChart = !this.viewChart;
  }

  public getViewChart(): boolean{
    return this.viewChart
  }

  public cartItems:Array<{Item:Item,cnt:number}> = []
  public addTochart(data:Item,quantity:number):void{
    if(this.cartItems.length > 0){
      let index = this.cartItems.findIndex(x => x.Item.id == data.id)
      if(index != -1){
        this.cartItems[index].cnt += quantity; 
      }
    }else{
      this.cartItems.push({Item:data,cnt:quantity});
    }
  }

  public removeFromChart(i:number){
    this.cartItems = this.cartItems.filter(x=>x.Item.id != i)
  }

  public setVisibilitySideBar(value:boolean){
    this.sidebarVisible = value
  }
}
