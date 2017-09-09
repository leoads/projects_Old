import { Component, OnInit, NgModule } from '@angular/core';

import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import {Headers, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  ListIssue: any ;

  issue = {
    title: "",
    body: "",    
  };

  JsonUser = {
    userName: "",
    passWord: "",
  };

  constructor(private http: Http,) { }

  ngOnInit() {
    this.getUser();
  }

//get user logged
  getUser(){
    this.JsonUser = JSON.parse(sessionStorage.getItem('login'));

    }  
// create a issue
  CreateIssue(){
    let json = JSON.stringify(this.issue);
    let owner = this.JsonUser.userName;
    let repo = 'projects';
    let options: RequestOptions;
    let header = new Headers();
    header.append('Content-type', 'application/json; charset=utf-8');
    header.append('Authorization' , 'Basic '+ btoa(this.JsonUser.userName +':'+ this.JsonUser.passWord));    
     return new Promise(resolve => {
      options = new RequestOptions({headers: header});
          this.http.post('https://api.github.com/repos/'+owner+'/'+repo+'/issues',json,options)
            .map(res =><Response> res.json())
            .subscribe(resp => {
              this.data = resp;
              resolve(this.data);
              if(this.data.id){
                this.issue.body = "";
                this.issue.title = "";

              }
            });
        });

  }
// list all issues
  listIssue(){    
    let json = JSON.stringify(this.issue);
    let owner = this.JsonUser.userName;
    let repo = 'projects';
    let options: RequestOptions;
    let header = new Headers();
    header.append('Content-type', 'application/json; charset=utf-8');
    header.append('Authorization' , 'Basic '+ btoa(this.JsonUser.userName +':'+ this.JsonUser.passWord));    
     return new Promise(resolve => {
      options = new RequestOptions({headers: header});
          this.http.get('https://api.github.com/repos/'+owner+'/'+repo+'/issues',options)
            .map(res =><Response> res.json())
            .subscribe(resp => {
              this.ListIssue = resp;
              resolve(this.data);           
            });
        });

  }

  

}
