import { Component, OnInit } from '@angular/core';
import { VcaTitleComponent } from '../components/vca-title/vca-title.component';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AddButtonComponent } from '../components/add-button/add-button.component';
import { ConfigOptionsComponent } from './config-options/config-options.component';
import { DomainService } from '../../services/domain.service';
import { ChartViewComponent } from './chart-view/chart-view.component';
import { last, Observable, of } from 'rxjs';
import { IpListComponent } from "./ip-list/ip-list.component";
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-domain-page',
  standalone: true,
  templateUrl: './domain-page.component.html',
  styleUrl: './domain-page.component.css',
  imports: [
    VcaTitleComponent,
    NgClass,
    NgIf,
    RouterModule,
    MatIconModule,
    AddButtonComponent,
    ConfigOptionsComponent,
    ChartViewComponent,
    IpListComponent,
    NgIf
],
})
export class DomainPageComponent implements OnInit {
  lastWeekVisitors: any;
  lastHit: any;
  domainData: any;
  config: any;
  majority!: string;
  fan!: string;
  constructor(private domainService: DomainService, private router : Router, private alertsService: AlertsService) {}
  ngOnInit(): void {
    this.domainService.getDomain(location.pathname).subscribe({
      next: (data) => {
        (data) ?? this.router.navigate(['pickup']);
        this.domainData = data.domainData;
        this.config = [data.domainData.domain, data.domainData.domainkey, data.domainData.domainstats.statId];
        this.getLastWeekVisitors();
        this.getLastHit();
        this.getMajorityCountry();
        this.getFan();
        console.log(data)
      },
      error:()=>{
        this.router.navigate(['pickup']);
      }
    });
  }
  getLastWeekVisitors() {
    const now = new Date().getTime();
    const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;

    const lastWeekVisitors = this.domainData.domainvisitors.filter(
      (visitor: any) => {
        const visitorDate = new Date(visitor.visitorDate).getTime();
        return visitorDate >= sevenDaysAgo;
      }
    );

    this.lastWeekVisitors = lastWeekVisitors.length;
  }
  getLastHit() {
    const length = this.domainData.domainvisitors.length;
    const lastHit = this.domainData.domainvisitors.slice(length - 1, length);
    if (lastHit[0].visitorId != null) {
      const date = new Date(lastHit[0].visitorDate);
      this.lastHit = date.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    } else {
      this.lastHit = 'No hits.';
    }
  }
  getMajorityCountry() {
    const visits = [...this.domainData.domainvisitors];
    if (visits[0].visitorId!=null) {
      const countryVisitCount: Record<string, number> = {};
      visits.forEach((visit: any) => {
        let country = visit.visitorUbication.split(',')[0];
        if (countryVisitCount[country]) {
          countryVisitCount[country]++;
        } else {
          countryVisitCount[country] = 1;
        }
      });
      let maxVisits = 0;
      let countryWithMostVisits = '';
      for (const country in countryVisitCount) {
        if (countryVisitCount[country] > maxVisits) {
          maxVisits = countryVisitCount[country];
          countryWithMostVisits = country;
        }
      }

      this.majority = countryWithMostVisits;
    }else{
      this.majority= 'No hits.'
    }
  }
  getFan() {
    const visits = this.domainData.domainvisitors;
    if (visits[0].visitorId!=null) {
      const ipVisitCount: Record<string, number> = {};
      visits.forEach((visit: any) => {
        let ip = visit.visitorIp;
        if (ipVisitCount[ip]) {
          ipVisitCount[ip]++;
        } else {
          ipVisitCount[ip] = 1;
        }
      });
      const sortedIpVisitCount = Object.entries(ipVisitCount).sort(
        (a, b) => b[1] - a[1]
      );
      const bestVisitor = visits.find(
        (e: any) => e.visitorIp === sortedIpVisitCount[0][0]
      );
      this.fan = bestVisitor.visitorUbication.split(',')[0];
    } else {
      this.fan = 'No hits.';
    }
  }
  clipboard(stringToCopy: string, alert : string) {
    navigator.clipboard.writeText(stringToCopy)
    this.alertsService.showAlert(alert || "Copied!")
  }
}
