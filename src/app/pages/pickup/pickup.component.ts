import { Component } from '@angular/core';
import { VcaTitleComponent } from '../components/vca-title/vca-title.component';
import { AddButtonComponent } from '../components/add-button/add-button.component';
import { DomainCardComponent } from './domain-card/domain-card.component';
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
