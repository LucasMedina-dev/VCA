import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { DomainService } from '../../../domain.service';

@Component({
  selector: 'app-creation-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './creation-form.component.html',
  styleUrl: './creation-form.component.css',
})
export class CreationFormComponent{
  domainGroup = new FormGroup({
    domainName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern('[a-zA-Z]*')])),
    domainDescription: new FormControl('', Validators.compose([Validators.required, Validators.minLength(50), Validators.maxLength(400), Validators.pattern('[a-zA-Z ]*')])),
    domainWebsite: new FormControl(''),
    keyStatus: new FormControl(false),
  });
  constructor(private domainService: DomainService){}

  createDomain() {
    
  }

}
