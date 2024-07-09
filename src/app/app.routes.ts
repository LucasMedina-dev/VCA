import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PickupComponent } from './pages/pickup/pickup.component';
import { CreationPageComponent } from './pages/creation-page/creation-page.component';
import { DomainPageComponent } from './pages/domain-page/domain-page.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
    {path:'', component:LandingComponent},
    {path:'pickup', component:PickupComponent, canActivate:[AuthGuard]},
    {path:'creation', component:CreationPageComponent, canActivate:[AuthGuard]},
    {path:'stats/:name', component:DomainPageComponent, canActivate:[AuthGuard]},
    {path:'**', component:LandingComponent}
];
