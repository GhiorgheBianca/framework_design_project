import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  public chart: any;

  createChart(){
    this.chart = new Chart("MySecondChart", {
      // the type of chart
      type: 'line',

      data: {
        // values on X-Axis
        labels: ['2023-05-10', '2023-05-11', '2023-05-12','2023-05-13',
								 '2023-05-14', '2023-05-15', '2023-05-16','2023-05-17', ], 
	       datasets: [
          {
            label: "Fruits",
            data: ['492', '374', '673', '376',
                   '381', '451', '655', '276'],
            backgroundColor: 'purple'
          },
          {
            label: "Vegetables",
            data: ['317', '512', '438', '241',
                   '420', '280', '658', '452'],
            backgroundColor: 'orange'
          }  
        ]
      },
      options: {
        aspectRatio:3.5
      }
      
    });
  }

  ngOnInit(): void {
    this.createChart();
  }

  title = 'angular-web-component';

}
