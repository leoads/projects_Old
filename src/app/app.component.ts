import { Component, NgModule, } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import {Headers, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HomeComponent } from './home/home.component';
import { Router } from '@angular/router';
// import { Storage }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  public data: any;
  public usuarioAutenticado: boolean = false;
  constructor(private http: Http, public router: Router) {  };

  login = {
    userName:"",
    passWord: "",
  }


  loginAPI(){
    let options: RequestOptions;
    let header = new Headers();
    let loginJson = "";
    header.append('Content-type', 'application/json; charset=utf-8');
    header.append('Authorization' , 'Basic '+ btoa(this.login.userName +':'+ this.login.passWord));    
     return new Promise(resolve => {
      options = new RequestOptions({headers: header});
          this.http.get('https://api.github.com/user',options)
            .map(res =><Response> res.json())
            .subscribe(resp => {
              this.data = resp;
              resolve(this.data);              
              if(this.data.login !== ""){
                console.log("Logado");
                loginJson = JSON.stringify(this.login)
                sessionStorage.setItem('login', loginJson);
                this.router.navigate(['/Home']);
                this.usuarioAutenticado = true;
              }else{
                console.log("Não Foi possivel Logar");
                
              }
              
            });
        });

  }



}
