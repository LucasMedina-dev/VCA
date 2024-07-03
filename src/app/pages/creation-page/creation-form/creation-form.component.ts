import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { noWhitespaceValidator } from '../validators/no-whitespace.validator';

@Component({
  selector: 'app-creation-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './creation-form.component.html',
  styleUrl: './creation-form.component.css',
})
export class CreationFormComponent{
  domainGroup = new FormGroup({
    domainName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), noWhitespaceValidator()])),
    domainWebsite: new FormControl(''),
    keyStatus: new FormControl(true),
  });
  constructor(){}

  createDomain() {
  }
  getField(field: string){
    let status : boolean= (this.domainGroup.get(field)?.valid || this.domainGroup.get(field)?.value=='');
    return status
  }
}
