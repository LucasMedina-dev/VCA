import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { noWhitespaceValidator } from '../validators/no-whitespace.validator';
import { AuthService } from '@auth0/auth0-angular';
import DomainStruct from '../../structures/domainStruct';
import { Router } from '@angular/router';
import { DomainService } from '../../../domain.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-creation-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './creation-form.component.html',
  styleUrl: './creation-form.component.css',
})
export class CreationFormComponent implements OnInit {
  loading: boolean = false;
  userData: any;
  userId: any;
  domainData!: DomainStruct;
  domainGroup = new FormGroup({
    domainName: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*'),
        noWhitespaceValidator(),
      ])
    ),
    domainWebsite: new FormControl(''),
    keyStatus: new FormControl(true),
  });
  constructor(private auth: AuthService, private router: Router, private domainService: DomainService) {}
  ngOnInit(): void {
    this.auth.user$.subscribe({
      next: (data) => {
        this.userData = data;
        this.userId = this.getUserId(this.userData.sub)
      },
    });
  }
  
  // DOMAIN THINGS
  createDomain() {
    if (this.domainGroup.valid && this.userId!='') {
      this.domainData = {
        userId: this.userId || '',
        domainName: this.domainGroup.value.domainName || '',
        website: this.domainGroup.value.domainWebsite || '',
        keyStatus: this.domainGroup.value.keyStatus || false,
      };
      // se hace click al boton ready, mientras se lanza la peticion y se espera la respuesta del servidor, this.loading pasa a ser true
      this.loading = true;
      this.domainService.postDomain(this.domainData).subscribe({
        next:(data)=>{
          console.log(data)
        },
        error: (error)=>{
          console.log(error)
        }
      })
      
    }
  }
  getField(field: string) {
    let status: boolean =
      this.domainGroup.get(field)?.valid ||
      this.domainGroup.get(field)?.value == '';
    return status;
  }

  // USER THINGS
  getUserId(user : string){
    const inputString = user
    const parts = inputString.split('|'); // Dividir la cadena en dos partes usando el carácter '|'
    return parts[1];
  }
}
