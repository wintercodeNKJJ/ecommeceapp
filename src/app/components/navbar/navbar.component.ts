import { Component } from '@angular/core';
import { ServiceService } from 'src/app/context/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor (private service:ServiceService){}

  public setVisible(): void{
    this.service.setViewChart()
  }

  viewSideNav(){
    this.service.setVisibilitySideBar(true)
  }
}
