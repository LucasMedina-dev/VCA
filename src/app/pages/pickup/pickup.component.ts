import { Component, OnInit } from '@angular/core';
import { VcaTitleComponent } from '../components/vca-title/vca-title.component';
import { AddButtonComponent } from '../components/add-button/add-button.component';
import { DomainCardComponent } from './domain-card/domain-card.component';
import { CommonModule } from '@angular/common';
import { DomainService } from '../../services/domain.service';
import { CreationFormComponent } from "./creation-form/creation-form.component";
import { Subscription } from 'rxjs';
import { AlertsService } from '../../services/alerts.service';

@Component({
    selector: 'app-pickup',
    standalone: true,
    templateUrl: './pickup.component.html',
    styleUrl: './pickup.component.css',
    imports: [VcaTitleComponent, DomainCardComponent, AddButtonComponent, CommonModule, CreationFormComponent]
})
export class PickupComponent implements OnInit{
    private subscription!: Subscription; 
    domainList!: Array<any>;
    createOpened: boolean=false;
    constructor(private domainService : DomainService, private alertService : AlertsService){}

    ngOnInit(): void {
        this.subscription= this.domainService.getDomains().subscribe({
            next:(domains)=>{
                if(domains.length===0){
                    this.createOpened=true;
                }
                this.domainList= domains
                this.subscription.unsubscribe()
            }
        })
    }
    newCounter() {
        this.createOpened=true;
    }
    refreshData() {
        this.createOpened=false;
        this.subscription= this.domainService.getDomains().subscribe({
            next:(domains)=>{
                this.domainList.push(domains.pop())      
            }
        })
    }
    closeWindow(){
        if(this.domainList.length>0){
            this.createOpened=false
        }else{
            this.alertService.showAlert('You need to create a counter.')
        }
    }
}
