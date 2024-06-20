import { Component, OnInit } from '@angular/core';
import { VcaTitleComponent } from '../components/vca-title/vca-title.component';
import { AddButtonComponent } from '../domain-page/add-button/add-button.component';
import { DomainCardComponent } from '../domain-page/domain-card/domain-card.component';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pickup',
    standalone: true,
    templateUrl: './pickup.component.html',
    styleUrl: './pickup.component.css',
    imports: [VcaTitleComponent, DomainCardComponent, AddButtonComponent, CommonModule]
})
export class PickupComponent{
}
