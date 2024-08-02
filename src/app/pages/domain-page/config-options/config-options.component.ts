import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomainService } from '../../../services/domain.service';
import { AlertsService } from '../../../services/alerts.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-config-options',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './config-options.component.html',
  styleUrl: './config-options.component.css',
})
export class ConfigOptionsComponent {
  @Input() domainData: any;
  private resetSubscription!: Subscription;
  private deleteSubscription!: Subscription;
  constructor(
    private domainService: DomainService,
    private alert: AlertsService,
    private router: Router
  ) {}

  switchKeyStatus() {
    this.domainService.switchKeyStatus(this.domainData[1].keyId).subscribe({
      next: (data) => {
        if (data.affectedRows === 1) {
          this.domainData[1].keyStatus = !this.domainData[1].keyStatus;
          this.alert.showAlert(
            'Key is now ' +
              (this.domainData[1].keyStatus ? 'required.' : 'not required.')
          );
        }
      },
    });
  }
  switchDomainStatus() {
    this.domainService
      .switchDomainStatus(this.domainData[0].domainId)
      .subscribe({
        next: (data) => {
          if (data.affectedRows === 1) {
            this.domainData[0].domainStatus = !this.domainData[0].domainStatus;
            this.alert.showAlert(
              'Counter is now ' +
                (this.domainData[0].domainStatus ? 'active.' : 'disabled.')
            );
          }
        },
      });
  }
  resetDomainStats() {
    this.alert.createAsk('You will reset all stats of this counter.');
    this.resetSubscription= this.alert.responseAlert$.subscribe({
      next: (response) => {
        console.log(response)
        if (response) {
          this.domainService
            .resetDomainStats(this.domainData[0].domainId, this.domainData[2])
            .subscribe({
              next: (data) => {
                if (data.affectedRows != 0) {
                  this.alert.showAlert('Stats were reseted.');
                  this.router.navigate(['pickup']);
                } else {
                  this.alert.showAlert("Counter doesn't have hits.");
                }
              },
            });
        }
        this.resetSubscription.unsubscribe()
      }
    })

  }
  deleteDomain() {
    this.alert.createAsk('You will delete permanently this counter.');
    this.deleteSubscription= this.alert.responseAlert$.subscribe({
      next: (response) => {
        if (response) {
          this.domainService
            .deleteDomain(this.domainData[0].domainId)
            .subscribe({
              next: (data) => {
                if (data.affectedRows != 0) {
                  this.alert.showAlert('Domain deleted.');
                  this.router.navigate(['pickup']);
                }
              },
            });
        }
        this.deleteSubscription.unsubscribe()
      }
    })
  }
}
