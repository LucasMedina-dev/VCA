import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ip-list',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, FormsModule],
  templateUrl: './ip-list.component.html',
  styleUrl: './ip-list.component.css'
})
export class IpListComponent implements OnChanges{
  orderKey: string = '';
  orderDirection: 'asc' | 'desc' = 'asc';
  @Input() visitors!: Array<any>
  groupedVisitors: { [date: string]: any[] } = {};
  filteredDates!: Array<any>;
  selectedOption: string = 'All dates';
  ngOnInit() {
    this.groupVisitorsByDate();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.visitors.length===0){
      this.groupVisitorsByDate();
    }else{
      this.filteredDates = []
      this.groupedVisitors= {}
    }
  }
  groupVisitorsByDate() {
    if(this.visitors[0].visitorId!=null){
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
  }

  getDates() {
    return Object.keys(this.groupedVisitors);
  }

  getListByDate(option : any) {
    if(!isNaN(option)){
      this.filteredDates= this.visitors.filter((visitor:any)=> this.getDates()[option] === visitor.visitorDate)
    }else if(option==='All dates'){
      this.unfilterDates()
    }
  }
  unfilterDates(){
    if(this.visitors[0].visitorId!=null){
      this.filteredDates=this.visitors;
    }
  }
  orderBy(key: string) {
    if (this.orderKey === key) {
      this.orderDirection = this.orderDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.orderKey = key;
      this.orderDirection = 'asc';
    }
  
    this.filteredDates.sort((a, b) => {
      if (a[key] < b[key]) {
        return this.orderDirection === 'asc' ? -1 : 1;
      } else if (a[key] > b[key]) {
        return this.orderDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
