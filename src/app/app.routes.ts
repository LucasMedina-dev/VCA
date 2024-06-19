import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PickupComponent } from './pages/pickup/pickup.component';
import { CreationPageComponent } from './pages/creation-page/creation-page.component';
import { DomainPageComponent } from './pages/domain-page/domain-page.component';

export const routes: Routes = [
    {path:'', component:LandingComponent},
    {path:'pickup', component:PickupComponent},
    {path:'creation', component:CreationPageComponent},
    {path:'stats/:name', component:DomainPageComponent},
    {path:'**', component:LandingComponent}
];
