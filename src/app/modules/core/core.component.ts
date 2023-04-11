import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Chart } from 'chart.js'
import { ToastrService } from 'ngx-toastr';
import { HttpService } from './http/http.service';
@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit, AfterViewInit {
  canvas1: any;
  ctx1: any;
  @ViewChild('mychart1') mychart1: any;
  canvas2: any;
  ctx2: any;
  @ViewChild('mychart2') mychart2: any;
  loader: boolean = true;
  Dto = {
    dataAccessDTO: this.httpService.dataAccessDTO,
  }
  totalDonor: any;
  totalBlock: any;
  totalBranch: any;
  totalDistrict: any;
  totalProjectMasterId: any;
  totalRegion: any;
  totalStateName: any;
  totalVillageLocality: any;
  percentageFamilyCount: any;
  percentagePemCumulative: any;
  percentageLmCumulative: any;
  percentagePwCumulative: any;
  familyInfoGraphData: any;
  // dashboardAccess: boolean;
  barChart1;
  barChart2;

  constructor(private httpService: HttpService, public dialog: MatDialog,
    private http: HttpClient, private toaster: ToastrService,) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    // this.dashboardAccess = (user.responseObject.RoledetailDTO.roleShortName == 'PM') ? true : false;

    this.http.post(`${this.httpService.baseURL}report/getGeographicalOutreach`, this.Dto).subscribe((res: any) => {
      let donorName: Array<any> = [];
      let block: Array<any> = [];
      let branch: Array<any> = [];
      let district: Array<any> = [];
      let projectMasterId: Array<any> = [];
      let region: any = [];
      let stateName: any = [];
      let villageLocality: Array<any> = [];
      res.responseObject?.geographicalOutreachList.map(i => {
        donorName.push(i.donorName);
        block.push(i.block);
        branch.push(i.branch);
        district.push(i.district);
        projectMasterId.push(i.projectMasterId);
        region += i.regionId + ',';
        stateName += i.stateName + ',';
        villageLocality.push(i.villageLocality);
      })
      let arr = new Array();
      arr = stateName.slice(0, (stateName?.length - 1)).split(",");
      let removeNullState = arr.filter((i) => i != 'null');
      let arr1 = new Array();
      arr1 = region.slice(0, (region?.length - 1)).split(",");
      let removeNullRegion = arr1.filter((i) => i != 'null');
      this.totalDonor = [...new Set(donorName)]?.length;
      this.totalBlock = block.reduce((a, b) => a + b, 0);
      this.totalBranch = branch.reduce((a, b) => a + b, 0);
      this.totalDistrict = district.reduce((a, b) => a + b, 0);
      this.totalProjectMasterId = [...new Set(projectMasterId)]?.length;
      this.totalRegion = [...new Set(removeNullRegion)]?.length;
      this.totalStateName = [...new Set(removeNullState)]?.length;
      this.totalVillageLocality = villageLocality.reduce((a, b) => a + b, 0);
    }, error => {
    });



  }

  ngAfterViewInit(): void {
    // if (this.dashboardAccess == true) {
    let familyInfoGraphData = JSON.parse(localStorage.getItem('familyChildInfoGraphData'));

    if (familyInfoGraphData == null || familyInfoGraphData.length == 0) {
      this.getChartData();
    } else {
      this.familyBarChart(familyInfoGraphData);
      this.barChart(familyInfoGraphData);
      this.loader = true;
    }
    // }
  }

  getChartData() {
    /* report/getBeneficiaryInfoProject */
    this.loader = false;
    this.http.post(`${this.httpService.baseURL}dashboardStat/getDashboardStat`, this.Dto).subscribe((res: any) => {

      let totalFamilyCount = res.responseObject.reduce((sum, current) => sum + current.totalFamilyCount, 0);
      let totalPemCumulative = res.responseObject.reduce((sum, current) => sum + current.pemCumulative, 0);
      let totalLmCumulative = res.responseObject.reduce((sum, current) => sum + current.lmCumulative, 0);
      let totalPwCumulative = res.responseObject.reduce((sum, current) => sum + current.pwCumulative, 0);

      let totalBelow5Cumulative = res.responseObject.reduce((sum, current) => sum + current.below5Cumulative, 0);
      let totalBelow2Cumulative = res.responseObject.reduce((sum, current) => sum + current.below2Cumulative, 0);
      let totalChildPemCumulative = res.responseObject.reduce((sum, current) => sum + current.childPemCumulative, 0);
      let totalGirl14To18Cumulative = res.responseObject.reduce((sum, current) => sum + current.girl14To18Cumulative, 0);

      let otherFamilyCount = totalFamilyCount - (totalPemCumulative + totalLmCumulative + totalPwCumulative);

      this.percentageFamilyCount = ((otherFamilyCount / totalFamilyCount) * 100).toFixed(2);
      this.percentagePemCumulative = ((totalPemCumulative / totalFamilyCount) * 100).toFixed(2);
      this.percentageLmCumulative = ((totalLmCumulative / totalFamilyCount) * 100).toFixed(2);
      this.percentagePwCumulative = ((totalPwCumulative / totalFamilyCount) * 100).toFixed(2);

      this.familyInfoGraphData = [[this.percentageFamilyCount, this.percentagePemCumulative, this.percentageLmCumulative, this.percentagePwCumulative]
        , [otherFamilyCount, totalPemCumulative, totalLmCumulative, totalPwCumulative]
        , [totalBelow5Cumulative, totalBelow2Cumulative, totalChildPemCumulative, totalGirl14To18Cumulative]];

      localStorage.setItem('familyChildInfoGraphData', JSON.stringify(this.familyInfoGraphData));
      this.familyBarChart(this.familyInfoGraphData);
      this.barChart(this.familyInfoGraphData);
      this.loader = true;
    });
  }

  // doughnutChart(value) {
  //   this.canvas1 = this.mychart1?.nativeElement;
  //   this.ctx1 = this.canvas1?.getContext('2d');
  //   let label = value[0];
  //   let a: Array<any> = ['General Family', 'PEM', 'LM', 'PW'];
  //   let labels = [];
  //   a.forEach(i => {
  //     label.forEach(x => {
  //       if (a.indexOf(i) == label.indexOf(x))
  //         labels.push(i + ' ' + x + '%')
  //     })
  //   });
  //   const doughnutdata = {
  //     labels: labels,
  //     datasets: [{
  //       data: value[1],
  //       backgroundColor: [
  //         'rgb(75, 192, 192)',
  //         'rgb(245, 57, 97)',
  //         'rgb(20, 154, 245)',
  //         'rgb(255, 189, 32)',

  //       ],
  //       hoverOffset: 4
  //     }]
  //   };

  //   new Chart(this.ctx1, {
  //     type: 'doughnut',
  //     data: doughnutdata,
  //     options: {
  //       tooltips: {
  //         callbacks: {
  //           label: function (tooltipItem, data) {
  //             let label1 = a[tooltipItem.index];
  //             return label1 + ' : ' + data.datasets[0].data[tooltipItem.index];
  //           }
  //         }

  //       },
  //     }
  //   });
  // }

  familyBarChart(value) {
    this.canvas1 = this.mychart1?.nativeElement;
    this.ctx1 = this.canvas1?.getContext('2d');
    const bardata = {
      labels: [''],
      datasets: [{
        label: `LM Family (${value[1][2]})`,
        yAxisID: 'lm',
        data: [value[1][2]],
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        borderColor: 'rgb(255, 159, 64)',
        borderWidth: 2,
        barPercentage: 0.8
      }, {
        label: `PW Family (${value[1][3]})`,
        data: [value[1][3]],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
        barPercentage: 0.8
      }, {
        label: `PEM Family (${value[1][1]})`,
        yAxisID: 'pem',
        data: [value[1][1]],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        categoryPercentage: 1,
        barPercentage: 0.6
      }
      ]
    };
    // If condition for remove bar chart previous value
    if (this.barChart1) {
      this.barChart1.destroy()
    }
    this.barChart1 = new Chart(this.ctx1, {
      type: 'bar',
      data: bardata,
      options: {
        scales: {
          yAxes: [
            {
              id: 'lm',
              type: 'linear',
              position: 'left',
              ticks: {
                min: 0,
              },
              scaleLabel: {
                display: true,
                labelString: 'LM & PW Family Count.'
              }
            }, {
              id: 'pem',
              type: 'linear',
              position: 'right',
              ticks: {
                min: 0,
              },
              scaleLabel: {
                display: true,
                labelString: 'PEM Family Count.'
              }
            }]
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              let label1 = data.datasets[tooltipItem.datasetIndex].label.slice(0, (data.datasets[tooltipItem.datasetIndex].label.indexOf('(')));
              return label1 + ' :  ' + data.datasets[tooltipItem.datasetIndex].data[0];
            }
          }
        }
      }
    });
  }

  barChart(value) {
    this.canvas2 = this.mychart2?.nativeElement;
    this.ctx2 = this.canvas2?.getContext('2d');
    const bardata = {
      labels: [''],
      datasets: [{
        label: `Child Below 5 Years (${value[2][0]})`,
        yAxisID: '5c',
        data: [value[2][0]],
        backgroundColor: "rgba(255, 205, 86, 0.6)",
        borderColor: 'rgb(255, 205, 86)',
        borderWidth: 2
      }, {
        label: `Child Below 2 Years (${value[2][1]})`,
        data: [value[2][1]],
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        borderColor: 'rgb(255, 159, 64)',
        borderWidth: 2
      }, {
        label: `Adolescent Girls (${value[2][3]})`,
        data: [value[2][3]],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2
      }, {
        label: `Child PEM (${value[2][2]})`,
        yAxisID: 'cp',
        data: [value[2][2]],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        categoryPercentage: 1,
        barPercentage: 0.7
      }
      ]
    };
    // If condition for remove bar chart previous value
    if (this.barChart2) {
      this.barChart2.destroy()
    }
    this.barChart2 = new Chart(this.ctx2, {
      type: 'bar',
      data: bardata,
      options: {
        scales: {
          yAxes: [
            {
              id: '5c',
              type: 'linear',
              position: 'left',
              ticks: {
                min: 0,
              },
              scaleLabel: {
                display: true,
                labelString: 'Child Count.'
              }
            }, {
              id: 'cp',
              type: 'linear',
              position: 'right',
              ticks: {
                min: 0,
              },
              scaleLabel: {
                display: true,
                labelString: 'Child PEM Count.'
              }
            }]
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              let label1 = data.datasets[tooltipItem.datasetIndex].label.slice(0, (data.datasets[tooltipItem.datasetIndex].label.indexOf('(')));
              return label1 + ' :  ' + data.datasets[tooltipItem.datasetIndex].data[0];
            }
          }
        }
      }
    });
  }

  download(chartId, documentName) {
    const canvas = document.getElementById(chartId) as HTMLCanvasElement;
    this.fillCanvasBackgroundWithColor(canvas, 'white');
    canvas.toBlob(function (blob) {
      const url = URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = url;
      link.download = documentName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 'image/jpeg', 1);
  }

  fillCanvasBackgroundWithColor(canvas, color) {
    const context = canvas?.getContext('2d');
    context.save();
    context.globalCompositeOperation = 'destination-over';
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.restore();
  }

  refreshChart() {
    localStorage.removeItem('familyChildInfoGraphData');
    this.getChartData();
  }
}
