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
import { DomainService } from '../../../services/domain.service';
import { AlertsService } from '../../../services/alerts.service'
import { AlertComponent } from "../../components/alert/alert.component";

@Component({
    selector: 'app-creation-form',
    standalone: true,
    templateUrl: './creation-form.component.html',
    styleUrl: './creation-form.component.css',
    imports: [ReactiveFormsModule, NgClass, NgIf, AlertComponent]
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
        Validators.maxLength(60),
        Validators.pattern('[a-zA-Z ]*'),
        noWhitespaceValidator(),
      ])
    ),
    domainWebsite: new FormControl(''),
    keyStatus: new FormControl(true),
  });
  constructor(private auth: AuthService, private router: Router, private domainService: DomainService, private alert : AlertsService) {}
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
        domainWebsite: this.domainGroup.value.domainWebsite || '',
        keyStatus: this.domainGroup.value.keyStatus || false,
      };
      this.loading = true;      
      this.domainService.postDomain(this.domainData).subscribe({
        next:(data)=>{
          this.alert.showAlert('Domain created.')
          this.loading=false;
        },
        error: (error)=>{
          console.log(error)
          if(error.status===403){
            this.alert.showAlert('Domain name already exists.')
          }
          this.loading=false;
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
