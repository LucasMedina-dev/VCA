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
  filteredDates!: Array<any>;

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
      visit.visitorDate=date
    });
    this.filteredDates= this.visitors
  }

  getDates() {
    return Object.keys(this.groupedVisitors);
  }

  getListByDate(date: string) {
    this.filteredDates= this.visitors.filter((visitor:any)=> date === visitor.visitorDate)
  }
  unfilterDates(){
    this.filteredDates=this.visitors;
  }
}
