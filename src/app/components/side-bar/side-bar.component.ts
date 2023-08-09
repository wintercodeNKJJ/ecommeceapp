import { Component, DoCheck } from '@angular/core';
import { ServiceService } from 'src/app/context/service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements DoCheck {
  public visible:boolean = false
  constructor(private service:ServiceService){}
  ngDoCheck(): void {
      this.visible = this.service.sidebarVisible;
  }

  hide(){
    this.service.setVisibilitySideBar(false)
  }
}
