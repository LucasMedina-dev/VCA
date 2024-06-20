import { Component } from '@angular/core';
import { VcaTitleComponent } from '../../vca-title/vca-title.component';
import { CreationFormComponent } from './creation-form/creation-form.component';

@Component({
    selector: 'app-creation-page',
    standalone: true,
    templateUrl: './creation-page.component.html',
    styleUrl: './creation-page.component.css',
    imports: [VcaTitleComponent, CreationFormComponent]
})
export class CreationPageComponent {
}
