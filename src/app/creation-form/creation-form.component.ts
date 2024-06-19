import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './creation-form.component.html',
  styleUrl: './creation-form.component.css',
})
export class CreationFormComponent {
  constructor(private router: Router){}
  createDomain() {
    // Request to create a new domain (remember create endpoint name)
    // Response a domain (id, name, description, ...) we didn't need it
    // On the service "domains" return the user domains list
    this.router.navigate(['/pickup'])
  }
  domainGroup = new FormGroup({
    domainName: new FormControl(''),
    domainDescription: new FormControl(''),
    domainWebsite: new FormControl(''),
    keyStatus: new FormControl(false),
  });
}
