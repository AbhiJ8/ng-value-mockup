import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  methodsBar = []
  valRangeBar = []
  profitsBar = []
  sharePie = []
  revCostsChart = []

  constructor() { }

  ngOnInit() {

    this.methodsBar = new Chart('methodsBar', {
      type: 'bar',
      data: {
        labels: ["Scorecard", "Check-List", "Venture Capital", "DCF Long Term Growth", "DCF with Multiples"],
        datasets: [{
          data: [3, 2, 0.372, 1.7, 1.7],
          backgroundColor: ["#a7d90c", "#a7d90c", "#a7d90c", "#dddddd", "#dddddd",],
          fill: true,
        }]
      },
      options: {
        responsive: false,
        title: {
          display: false,
        },
        legend: {
          display: false
        },
        scales: {
          gridLines: {
            display: false
          },
          xAxes: [{
            display: true
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              max: 3,
              min: 0,
              stepSize: 1
            }
          }]
        },
        scaleLabel: {

        }
      }
    });

    this.valRangeBar = new Chart('valRangeBar', {
      type: 'bar',
      data: {
        labels: ["800.5 k>", "1.2 M>", "1.6 M>", "2M", "<2.4 M", "<2.9 M", "<3.3 M"],
        display: false,
        datasets: [{
          data: [100, 60, 50, 100, 40, 30, 35],
          backgroundColor: ["#2D2E2E", "#2D2E2E", "#2D2E2E", "#a7d90c", "#2D2E2E", "#2D2E2E", "#2D2E2E"],
          fill: true,
        }]
      },
      options: {
        responsive: false,
        title: {
          display: false,
        },
        legend: {
          display: false
        },
        scales: {
          gridLines: {
            display: false
          },
          xAxes: [{
            display: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              max: 100,
              min: 0,
              stepSize: 50
            }
          }]
        },
        scaleLabel: {

        }
      }
    });

    this.sharePie = new Chart('sharePie', {
      type: 'pie',
      data: {
        labels: ["Shareholder #1", "Shareholder #2", "Shareholder #3"],
        datasets: [{
          data: [37, 23, 40],
          backgroundColor: ['#a7d90c', '#a7d90c', '#a7d90c'],
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
        }
      }
    });

    this.profitsBar = new Chart('profitsBar', {
      type: 'bar',
      data: {
        labels: ["07/18 - 06/19", "07/19 - 06/20", "07/20 - 06/21"],
        datasets: [{
          label: "Company",
          backgroundColor: "#a7d90c",
          data: [0.25, 0.75, 1.5]

        },
        {
          label: "Others",
          backgroundColor: "#2D2E2E",
          data: [0.1, 0.25, 0.35]
        }
        ],
      },
      options: {
        responsive: true,
        title: {

        },
        legend: {
          display: true,
          position: "bottom"
        },
        scales: {
          gridLines: {
            display: false
          },
          xAxes: [{
            display: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              max: 2,
              min: 0,
              stepSize: 1
            }
          }]
        },
        scaleLabel: {

        }
      }
    });

    this.revCostsChart = new Chart('revCostsChart', {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Costs',
          data: [94,145,200],
          backgroundColor: "#a7d90c"
        }, {
          label: 'Revenues',
          data: [180,210,300],

          // Changes this dataset to become a line
          type: 'line',
          backgroundColor: "#2D2E2E",
          borderColor: "#2D2E2E",
          fill: false
        }],
        labels: ['07/18 - 06/19', '07/19 - 06/20', '07/20 - 06/21']
      },
      options: {
        title: {
        },
        legend: {
          display: true,
          position: "bottom"
        },
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true
            }
          }],
        }
      }
    });

  }


}
