import { Component } from '@angular/core';
import { VcaTitleComponent } from '../components/vca-title/vca-title.component';
import { CreationFormComponent } from './creation-form/creation-form.component';
import { AddButtonComponent } from "../domain-page/add-button/add-button.component";

@Component({
    selector: 'app-creation-page',
    standalone: true,
    templateUrl: './creation-page.component.html',
    styleUrl: './creation-page.component.css',
    imports: [VcaTitleComponent, CreationFormComponent, AddButtonComponent]
})
export class CreationPageComponent {
}
