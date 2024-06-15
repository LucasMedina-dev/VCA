import { Component } from '@angular/core';
import { VcaTitleComponent } from "../vca-title/vca-title.component";
import { DomainCardComponent } from "../domain-card/domain-card.component";

@Component({
    selector: 'app-pickup',
    standalone: true,
    templateUrl: './pickup.component.html',
    styleUrl: './pickup.component.css',
    imports: [VcaTitleComponent, DomainCardComponent]
})
export class PickupComponent{

    
}
