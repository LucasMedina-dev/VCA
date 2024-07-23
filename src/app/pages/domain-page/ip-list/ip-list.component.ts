import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ip-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './ip-list.component.html',
  styleUrl: './ip-list.component.css'
})
export class IpListComponent {
  @Input() visitors!: Array<any>
  groupedVisitors: { [date: string]: any[] } = {};
  expandedDates: { [date: string]: boolean } = {};

  ngOnInit() {
    this.groupVisitorsByDate();
  }

  groupVisitorsByDate() {
    this.visitors.forEach(visit => {
      const date = new Date(visit.visitorDate).toLocaleDateString();
      if (!this.groupedVisitors[date]) {
        this.groupedVisitors[date] = [];
      }
      this.groupedVisitors[date].push(visit);
    });
  }

  getDates() {
    return Object.keys(this.groupedVisitors);
  }

  toggle(date: string) {
    this.expandedDates[date] = !this.expandedDates[date];
  }

  isExpanded(date: string) {
    return this.expandedDates[date];
  }
}
