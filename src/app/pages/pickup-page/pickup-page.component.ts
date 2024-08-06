import { Component, OnInit } from '@angular/core';
import { VcaTitleComponent } from '../components/vca-title/vca-title.component';
import { NavigationButtonComponent } from '../components/navigation-button/navigation-button.component';
import { DomainCardComponent } from './domain-card/domain-card.component';
import { CommonModule } from '@angular/common';
import { DomainService } from '../../services/domain.service';
import { CreationFormComponent } from "./creation-form/creation-form.component";
import { Subscription } from 'rxjs';
import { AlertsService } from '../../services/alerts.service';

@Component({
    selector: 'app-pickup',
    standalone: true,
    templateUrl: './pickup-page.component.html',
    styleUrl: './pickup-page.component.css',
    imports: [VcaTitleComponent, DomainCardComponent, NavigationButtonComponent, CommonModule, CreationFormComponent]
})
export class PickupPageComponent implements OnInit{

    private subscription!: Subscription; 
    domainList: Array<any>=[];
    createOpened: boolean=false;
    loading!: boolean;
    constructor(private domainService : DomainService, private alertService : AlertsService){}
    ngOnInit(): void {
        this.loading=true
        this.subscription= this.domainService.getDomains().subscribe({
            next:(domains)=>{
                if(domains.length===0){
                        this.createOpened=true;
                }else{
                    setTimeout(() => {
                        this.domainList=domains;
                        this.loading=false;
                    }, 1500);
                    
                }
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
                if(domains.length){
                    this.domainList.push(domains.pop())
                }
                this.subscription.unsubscribe()
            }
        })
    }
    closeWindow(){
        if(this.domainList.length){
            this.createOpened=false
        }else{
            this.alertService.showAlert('You need to create a counter.')
        }
    }
}
