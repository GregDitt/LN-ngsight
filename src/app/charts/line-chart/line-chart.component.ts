import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS} from '../../shared/chart.color';

const LINE_CHART_SAMPLE_DATA:any [] =[
  {data: [32, 14, 46, 23, 38, 56], label: 'Sentiment Analysis'},
  {data: [12, 34, 26, 23, 38, 16], label: 'Image Recognition'},
  {data: [42, 34, 66, 23, 18, 26], label: 'Forecasting'}
 
];

const LINE_CHART_LABELS: string[] = ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jub'];



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }


  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
  };
  lineChartLegend: true;
  lineChartType= 'line';
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit(): void {
  }


}
