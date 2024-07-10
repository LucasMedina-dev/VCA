import { Component, OnInit } from '@angular/core';
import { VcaTitleComponent } from '../components/vca-title/vca-title.component';
import { AddButtonComponent } from '../components/add-button/add-button.component';
import { DomainCardComponent } from './domain-card/domain-card.component';
import { CommonModule } from '@angular/common';
import DomainStruct from '../structures/domainStruct';
import { DomainService } from '../../services/domain.service';

@Component({
    selector: 'app-pickup',
    standalone: true,
    templateUrl: './pickup.component.html',
    styleUrl: './pickup.component.css',
    imports: [VcaTitleComponent, DomainCardComponent, AddButtonComponent, CommonModule]
})
export class PickupComponent implements OnInit{
    domainList!: Array<DomainStruct>;
    userId!: string;
    constructor(private domainService : DomainService){}
    ngOnInit(): void {
        this.domainService.getDomains().subscribe({
            next:(domains)=>{
                this.domainList= domains
            }
        })
    }
}
