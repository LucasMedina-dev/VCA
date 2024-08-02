import { NgIf } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { Chart } from 'angular-highcharts';
import Highcharts from 'highcharts';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-chart-view',
  standalone: true,
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.css'],
  imports: [ChartModule, NgIf],
})
export class ChartViewComponent implements OnChanges {
  chart: Chart = new Chart({
    chart: { type: 'line' },
  });
  today: Date = new Date();
  @Input() hitData: any;
  dataSubject!: BehaviorSubject<string>;
  show: boolean = false;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hitData'] && changes['hitData'].currentValue) {
      this.show = true;
      this.loadChart(this.getHitsPerDay(this.hitData.domainvisitors));
    } else {
      this.show = false;
    }
  }
  loadChart(insertData: any) {


    this.chart = new Chart({
      accessibility: {
        enabled: false,
      },
      chart: {
        type: 'line',
        backgroundColor: 'transparent',
      },
      legend: {
        valueSuffix: '',
      },
      title: {
        text: '',
      },
      credits: {
        text: '',
      },
      yAxis: {
        title: {
          text: '',
        },
        tickInterval: 1,
      },
      xAxis: {
        title: {
          text: '',
        },
        tickInterval:1,
        lineColor: 'black',
        minorGridLineColor: 'black'
      },
      series: [
        {
          type: 'line',
          name: 'Hits',
          data: insertData,
        },
      ],
    });
  }
  
  getHitsPerDay(visitors: Array<any>) {
    const today = new Date();
    const hitsPerDay: Record<string, number> = {};

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      const day = date.toLocaleDateString('es-ES', { year: 'numeric',month: 'numeric', day:'numeric' });
      hitsPerDay[day] = 0;
    }

    visitors.forEach((visitor) => {
      const date = new Date(visitor.visitorDate);
      const day = date.toLocaleDateString('es-ES', { year: 'numeric',month: 'numeric', day:'numeric' });
      if (day in hitsPerDay && visitor.visitorId!=null) {
        hitsPerDay[day] += 1;
      }
    });

    return Object.keys(hitsPerDay)
      .map((day) => [day, hitsPerDay[day]]).reverse();
  }

}
