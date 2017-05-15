import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router"

import {HomeComponent} from './components/home/home.component';
import {HeroDetailsComponent} from './components/herodetails/herodetails.component';


const APP_Routes:Routes = [
  {path:"",component:HomeComponent},
  {path:"hero/:id", component: HeroDetailsComponent}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_Routes);
