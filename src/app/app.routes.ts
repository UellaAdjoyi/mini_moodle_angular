import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {CatalogueComponent} from './catalogue/catalogue.component';
import {UeCardComponent} from './ue-card/ue-card.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'catalogue',component:CatalogueComponent},
  {path:'ueStudent',component:UeCardComponent}
];
