import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  shareholderPie = []

  constructor() { }

  ngOnInit() {
    this.shareholderPie = new Chart('shareholderPie', {
      type: 'pie',
      data: {
        labels: ["Founder #1", "Founder #2",],
        datasets: [{
          data: [70,30],
          backgroundColor: ['#a7d90c', '#2aba3b'],
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
          position: 'bottom'
        }
      }
    });
  }

}
