import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ServiceAppService } from './services/service-app.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ServiceAppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
