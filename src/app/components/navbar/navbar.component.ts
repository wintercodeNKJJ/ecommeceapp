import { Component, DoCheck } from '@angular/core';
import { ServiceService } from 'src/app/context/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements DoCheck{
  constructor (private service:ServiceService){}

  public cnt:number = 0

  ngDoCheck(): void {
      this.cnt = this.service.cartItems.length
  }

  public setVisible(): void{
    this.service.setViewChart()
  }

  viewSideNav(){
    this.service.setVisibilitySideBar(true)
  }
}
