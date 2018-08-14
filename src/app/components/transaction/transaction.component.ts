import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  fundPie = []

  constructor() { }

  ngOnInit() {
    this.fundPie = new Chart('fundPie', {
      type: 'pie',
      data: {
        labels: ["Marketing expenses", "Operating expenses", "Others", "Product development", "Salaries", "Working capital"],
        datasets: [{
          data: [1,1,1,1,1,1],
          backgroundColor: ['#a7d90c', '#a7d90c', '#a7d90c','#a7d90c', '#a7d90c', '#a7d90c'],
          borderWidth: 1,
          fill: true,
        }
        ]
      },
      options: {
        title: {
          text: "Pie Chart",
          display: false,
        },
        legend: {
          display: true,
          position: "bottom"
        }
      }
    });
  }

}
