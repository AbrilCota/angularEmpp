import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Data } from '@angular/router';
import {Chart } from 'chart.js';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit{

  constructor(private service:SharedService) { }

  EmployeeList:any=[];

  ModalTitle:string;
  ActivateAddEmpComp:boolean=false;
  emp:any;

  EmployeeIdFilter:string="";
  AgeFilter:string="";
  AttritionFilter:string="";
  DepartmentFilter:string="";
  DistanceFromHomeFilter:string="";
  EducationFieldFilter:string="";
  EmployeeNumberFilter:string="";
  JobRoleFilter:string="";
  MaritalStatusFilter:string="";
  EmployeeListWithoutFilter:any=[];

  //Definition of variables for Chart
  divorcedValue:any=[0];
  divorcedLabel:any=['Divorced'];

  marriedValue:any=[0];
  marriedLabel:any=['Married'];

  singleValue:any=[0];
  singleLabel:any=['Single'];


  ngOnInit(): void {
    this.refreshEmployeeList();
    //this.updateChart();
  }
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;
  chartEx: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.chartEx = new Chart(this.ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label:this.divorcedLabel,
                data: this.divorcedValue,
                backgroundColor: "#2b6777",
                borderColor: "#007ee7",
                fill: true,
            },
            {
              label:this.marriedLabel,
              data: this.divorcedValue,
              backgroundColor: "#517f8c",
              borderColor: "#007ee7",
              fill: true,
          },
          {
            label:this.singleLabel,
            data: this.divorcedValue,
            backgroundColor: "#1c343b",
            borderColor: "#007ee7",
            fill: true,
        }
          ]
        },
    }); 
  }
 
  updateChart(){
    this.chartEx.data.datasets[0].data = this.divorcedValue;
    this.chartEx.data.datasets[1].data = this.marriedValue;
    this.chartEx.data.datasets[2].data = this.singleValue;
    this.chartEx.update();
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeCount:"",
      Age:"",
      Attrition:"",
      BusinessTravel:"",
      DailyRate:"",
      Department:"",
      DistanceFromHome:"",
      Education:"",
      EducationField:"",
      EmployeeNumber:"",
      EnvironmentSatisfaction:"",
      Gender:"",
      HourlyRate:"",
      JobInvolvement:"",
      JobLevel:"",
      JobRole:"",
      MaritalStatus:"",
      MonthlyIncome:"",
      MonthlyRate:"",
      NumCompaniesWorked:"",
      Over18:"",
      OverTime:"",
      PerformanceRating:"",
      RelationshipSatisfaction:"",
      StandardHours:"",
      StockOptionLevel:"",
      TotalWorkingYears:"",
      TrainingTimesLastYear:"",
      WorkLifeBalance:""

    }
    this.ModalTitle = "Add Employee";
    this.ActivateAddEmpComp = true;

    
  }

  deleteClick(item:any){
    if(confirm('Delete?')){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
          alert(data.toString());
          this.refreshEmployeeList();
      });
    }
  }

  closeClick(){
    this.ActivateAddEmpComp = false;
    this.refreshEmployeeList();

  /* var countOfDivorce;
    var countOfMarried;
    var countOfSingle;

    var emoloyeeManagement = this.EmployeeList;

    countOfDivorce = emoloyeeManagement.filter(function(x){
      return x.MaritalStatus == 'Divorced';
      }).length;

    countOfMarried = emoloyeeManagement.filter(function(x){
      return x.MaritalStatus == 'Married';
      }).length;

      countOfSingle = emoloyeeManagement.filter(function(x){
        return x.MaritalStatus == 'Single';
        }).length;

      this.divorcedValue=[countOfDivorce];
      this.marriedValue=[countOfMarried];
      this.singleValue = [countOfSingle];

      this.chartEx.data.datasets[0].data = this.divorcedValue;
      this.chartEx.data.datasets[1].data = this.marriedValue;
      this.chartEx.data.datasets[2].data = this.singleValue;
      this.chartEx.update(); */
  }
 

  refreshEmployeeList(){
    var countOfDivorce;
    var countOfMarried;
    var countOfSingle;
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
      this.EmployeeListWithoutFilter=data;

      countOfDivorce = data.filter(function(x){
        return x.MaritalStatus == 'Divorced';
        }).length;
  
      countOfMarried = data.filter(function(x){
        return x.MaritalStatus == 'Married';
        }).length;
  
      countOfSingle = data.filter(function(x){
          return x.MaritalStatus == 'Single';
          }).length;

          this.divorcedValue=[countOfDivorce];
          this.marriedValue=[countOfMarried];
          this.singleValue = [countOfSingle];
    
          this.chartEx.data.datasets[0].data = this.divorcedValue;
          this.chartEx.data.datasets[1].data = this.marriedValue;
          this.chartEx.data.datasets[2].data = this.singleValue;

          this.chartEx.update();
    });

    //var refDivorce; 
    //var refMarriage; 
    //var refSingle; 

   /* refDivorce = this.EmployeeList.filter(function(x){
    return x.MaritalStatus == 'Divorced';
    }).length;

    refMarriage = this.EmployeeList.filter(function(x){
    return x.MaritalStatus == 'Married';
    }).length;

    refSingle = this.EmployeeList.filter(function(x){
    return x.MaritalStatus == 'Single';
    }).length;

    this.divorcedValue=[refDivorce];
    this.marriedValue=[refMarriage];
    this.singleValue = [refSingle];

    this.chartEx.data.datasets[0].data = this.divorcedValue;
    this.chartEx.data.datasets[1].data = this.marriedValue;
    this.chartEx.data.datasets[2].data = this.singleValue;
    this.chartEx.update(); */
  }

  FilterFn(){
    
    var EmployeeIdFilter = this.EmployeeIdFilter;
    var AgeFilter = this.AgeFilter;
    var AttritionFilter = this.AttritionFilter;
    var DepartmentFilter = this.DepartmentFilter;
    var DistanceFromHomeFilter = this.DistanceFromHomeFilter;
    var EducationFieldFilter = this.EducationFieldFilter;
    var EmployeeNumberFilter = this.EmployeeNumberFilter;
    var JobRoleFilter = this.JobRoleFilter;
    var MaritalStatusFilter = this.MaritalStatusFilter;

    var countOfDivorce;
    var countOfMarried;
    var countOfSingle;

    this.EmployeeList = this.EmployeeListWithoutFilter.filter(function (el){
        return el.Attrition.toString().toLowerCase().includes(
          AttritionFilter.toString().trim().toLowerCase()
        )&&
        el.Age.toString().toLowerCase().includes(
          AgeFilter.toString().trim().toLowerCase()
        )&&
        el.Department.toString().toLowerCase().includes(
          DepartmentFilter.toString().trim().toLowerCase()
        )&&
        el.EducationField.toString().toLowerCase().includes(
          EducationFieldFilter.toString().trim().toLowerCase()
        )
    });

  countOfDivorce = this.EmployeeList.filter(function(x){
      return x.MaritalStatus == 'Divorced';
      }).length;

  countOfMarried = this.EmployeeList.filter(function(x){
    return x.MaritalStatus == 'Married';
    }).length;

  countOfSingle = this.EmployeeList.filter(function(x){
    return x.MaritalStatus == 'Single';
    }).length;

    this.divorcedValue=[countOfDivorce];
    this.marriedValue=[countOfMarried];
    this.singleValue = [countOfSingle];
    this.updateChart();
  }

  sortResult(prop,asc){
    this.EmployeeList = this.EmployeeListWithoutFilter.sort(function(a,b){
      if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
