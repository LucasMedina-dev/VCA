import { Component } from '@angular/core';
import { VcaTitleComponent } from "../vca-title/vca-title.component";
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-domain-page',
    standalone: true,
    templateUrl: './domain-page.component.html',
    styleUrl: './domain-page.component.css',
    imports: [VcaTitleComponent, NgClass]
})
export class DomainPageComponent {
    configOpened: boolean= false;
    domainData : any = {
        idDomain:1,
        counterStatus: true,
        keyStatus: true
    }
    settingsToggle(){
        this.configOpened=!this.configOpened
    }
}
