import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

const APP_Router: Routes = [   
    {path: 'Home', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_Router);