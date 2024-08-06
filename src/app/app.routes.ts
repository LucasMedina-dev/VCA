import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PickupPageComponent } from './pages/pickup-page/pickup-page.component';
import { DomainPageComponent } from './pages/domain-page/domain-page.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { GuidePageComponent } from './pages/guide-page/guide-page.component';

export const routes: Routes = [
    {path:'', component:LandingPageComponent},
    {path:'pickup', component:PickupPageComponent, canActivate:[AuthGuard]},
    {path:'stats/:name', component:DomainPageComponent, canActivate:[AuthGuard]},
    {path:'guide', component:GuidePageComponent, canActivate:[AuthGuard]},
    {path:'**', component:LandingPageComponent, canActivate:[AuthGuard]}
];
