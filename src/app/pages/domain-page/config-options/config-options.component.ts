import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomainService } from '../../../services/domain.service';
import { AlertsService } from '../../../services/alerts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config-options',
  standalone: true,
  imports: [NgClass, NgIf ],
  templateUrl: './config-options.component.html',
  styleUrl: './config-options.component.css'
})
export class ConfigOptionsComponent{
  @Input() domainData: any;
  constructor(private domainService : DomainService, private alert : AlertsService, private router: Router){}

  switchKeyStatus(){
    this.domainService.switchKeyStatus(this.domainData[1].keyId).subscribe({
      next:(data)=>{
        if(data.affectedRows===1){
          this.domainData[1].keyStatus=!this.domainData[1].keyStatus
          this.alert.showAlert('Key is now ' + (this.domainData[1].keyStatus ? 'required.' : 'not required.'))

        }
      }
    })
  }
  switchDomainStatus(){
    this.domainService.switchDomainStatus(this.domainData[0].domainId).subscribe({
      next:(data)=>{
        if(data.affectedRows===1){
          this.domainData[0].domainStatus=!this.domainData[0].domainStatus
          this.alert.showAlert('Counter is now ' + (this.domainData[0].domainStatus ? 'active.' : 'disabled.'))
        }
      }
    })
  }
  resetDomainStats(){
    this.domainService.resetDomainStats(this.domainData[0].domainId, this.domainData[2]).subscribe({
      next:(data)=>{
        if(data.affectedRows!=0){
          this.alert.showAlert('Stats were reseted.')
          this.router.navigate(['pickup'])
        }else{
          this.alert.showAlert("Counter doesn't have hits.")
        }
      }
    })
  }
  deleteDomain(){
    this.domainService.deleteDomain(this.domainData[0].domainId).subscribe({
      next:(data)=>{
        if(data.affectedRows!=0){
          this.alert.showAlert('Domain deleted.')
          this.router.navigate(['pickup'])
        }
      }
    })
  }
}
