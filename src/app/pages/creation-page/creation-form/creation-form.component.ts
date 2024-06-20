import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-creation-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './creation-form.component.html',
  styleUrl: './creation-form.component.css',
})
export class CreationFormComponent {
  constructor(private router: Router, private auth: AuthService){}
  createDomain() {
    // Request to create a new domain (remember create endpoint name)
    // Response a domain (id, name, description, ...) we didn't need it
    // On the service "domains" return the user domains list
    this.router.navigate(['/pickup'])
  }
  domainGroup = new FormGroup({
    domainName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-z]')]),
    domainDescription: new FormControl(''),
    domainWebsite: new FormControl(''),
    keyStatus: new FormControl(false),
  });
}
