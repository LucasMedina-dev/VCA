import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PickupPageComponent } from './pages/pickup-page/pickup-page.component';
import { DomainPageComponent } from './pages/domain-page/domain-page.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
    {path:'', component:LandingPageComponent},
    {path:'pickup', component:PickupPageComponent},
    {path:'stats/:name', component:DomainPageComponent},
    {path:'**', component:LandingPageComponent}
];
