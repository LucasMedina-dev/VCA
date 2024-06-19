import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PickupComponent } from './pickup/pickup.component';
import { CreationPageComponent } from './creation-page/creation-page.component';
import { DomainPageComponent } from './domain-page/domain-page.component';

export const routes: Routes = [
    {path:'', component:LandingComponent},
    {path:'pickup', component:PickupComponent},
    {path:'creation', component:CreationPageComponent},
    {path:'stats/:name', component:DomainPageComponent},
    {path:'**', component:LandingComponent}
];
