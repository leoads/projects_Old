import { Component } from '@angular/core';
import { ServiceAppService } from '../services/service-app.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  products: string[];
  listActions: string[];

  constructor(private serviceApp:ServiceAppService) {
      this.products = this.serviceApp.getProducts();

      this.listActions = this.serviceApp.getActions();

  }
}
