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

  ngOnInit(): void {
    this.refreshEmployeeList();
  }

  canvas: any;
  ctx: any;
  all:Data;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
      this.canvas = this.mychart.nativeElement;
      this.ctx = this.canvas.getContext('2d');
      this.all = this.service.getEmpList().subscribe(data=>{this.EmployeeList.Age=data;});
      new Chart(this.ctx, {
          type: 'line',
          data: {
              datasets: [{
                  label: 'Current Vallue',
                  data: this.all,
                  backgroundColor: "rgb(115 185 243 / 65%)",
                  borderColor: "#007ee7",
                  fill: true,
              },
              {
                  label: 'Invested Amount',
                  data: this.all,
                  backgroundColor: "#47a0e8",
                  borderColor: "#007ee7",
                  fill: true,
              }],
              labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
          },
      });
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeCount:"",
      Age:0,
      Attrition:"",
      BusinessTravel:"",
      DailyRate:0,
      Department:"",
      DistanceFromHome:0,
      Education:0,
      EducationField:"",
      EmployeeNumber:0,
      EnvironmentSatisfaction:0,
      Gender:"",
      HourlyRate:0,
      JobInvolvement:0,
      JobLevel:0,
      JobRole:"",
      MaritalStatus:"",
      MonthlyIncome:0,
      MonthlyRate:0,
      NumCompaniesWorked:0,
      Over18:"",
      OverTime:"",
      PerformanceRating:0,
      RelationshipSatisfaction:0,
      StandardHours:0,
      StockOptionLevel:0,
      TotalWorkingYears:0,
      TrainingTimesLastYear:0,
      WorkLifeBalance:0

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
  }
 

  refreshEmployeeList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
      this.EmployeeListWithoutFilter=data;
    });
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

    this.EmployeeList = this.EmployeeListWithoutFilter.filter(function (el){
        return el.AttritionFilter.toString().toLowerCase().includes(
          AttritionFilter.toString().trim().toLowerCase()
        )
    });
  }

}
