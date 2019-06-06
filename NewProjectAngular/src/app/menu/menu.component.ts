import { Component } from '@angular/core';
import { ServiceAppService } from '../services/service-app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  listmenu: string[];

  constructor(private serviceApp:ServiceAppService) { 
    this.listmenu = this.serviceApp.getListMenu();

  }

}
