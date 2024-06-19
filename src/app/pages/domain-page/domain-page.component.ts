import { Component } from '@angular/core';
import { VcaTitleComponent } from "../../vca-title/vca-title.component";
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-domain-page',
    standalone: true,
    templateUrl: './domain-page.component.html',
    styleUrl: './domain-page.component.css',
    imports: [VcaTitleComponent, NgClass, RouterModule, MatIconModule]
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
