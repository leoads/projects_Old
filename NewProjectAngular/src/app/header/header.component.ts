import { Component } from '@angular/core'
import { ServiceAppService } from '../services/service-app.service';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    users: string[];
    economicGroup: string[];
    pathImage: any = "../assets/img/logo.png";

    constructor(private serviceApp:ServiceAppService) { 
        this.users = this.serviceApp.getUsers();

        this.economicGroup = this.serviceApp.getEconomicGroup();

    }   
}
