import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PickupComponent } from './pickup/pickup.component';

export const routes: Routes = [
    {path:'', component:LandingComponent},
    {path:'pickup', component:PickupComponent},
    {path:'**', component:LandingComponent}
];
