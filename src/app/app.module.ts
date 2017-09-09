import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule  } from '@angular/http';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    
  ],
  providers: [
  

  ],
  bootstrap: [AppComponent],

  exports:[
    HttpModule,
    FormsModule,
  
  ],
})
  
export class AppModule { }
