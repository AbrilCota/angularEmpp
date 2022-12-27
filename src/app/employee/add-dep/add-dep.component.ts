import { Component , OnInit, Input} from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})
export class AddDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;  //Add this
  EmployeeId: string;
  EmployeeCount:string;
  Age:string;
  Attrition:string;
  BusinessTravel:string;
  DailyRate:string;
  Department:string;
  DistanceFromHome:string;
  Education:string;
  EducationField:string;
  EmployeeNumber:string;
  EnvironmentSatisfaction:string;
  Gender:string;
  HourlyRate:string;
  JobInvolvement:string;
  JobLevel:string;
  JobRole:string;
  MaritalStatus:string;
  MonthlyIncome:string;
  MonthlyRate:string;
  NumCompaniesWorked:string;
  Over18:string;
  OverTime:string;
  PerformanceRating:string;
  RelationshipSatisfaction:string;
  StandardHours:string;
  StockOptionLevel:string;
  TotalWorkingYears:string;
  TrainingTimesLastYear:string;
  WorkLifeBalance:string;


  ngOnInit(): void {
    this.EmployeeId = this.emp.EmployeeId;
    this.EmployeeCount = this.emp.EmployeeCount;
    this.Age= this.emp.Age;
    this.Attrition=this.emp.Attrition;
    this.BusinessTravel=this.emp.BusinessTravel;
    this.DailyRate=this.emp.DailyRate;
    this.Department=this.emp.Department;
    this.DistanceFromHome=this.emp.DistanceFromHome;
    this.Education=this.emp.Education;
    this.EducationField=this.emp.EducationField;
    this.EmployeeNumber=this.emp.EmployeeNumber;
    this.EnvironmentSatisfaction=this.emp.EnvironmentSatisfaction;
    this.Gender=this.emp.Gender;
    this.HourlyRate=this.emp.HourlyRate;
    this.JobInvolvement=this.emp.JobInvolvement;
    this.JobLevel=this.emp.JobLevel;
    this.JobRole=this.emp.JobRole;
    this.MaritalStatus=this.emp.MaritalStatus;
    this.MonthlyIncome=this.emp.MonthlyIncome;
    this.MonthlyRate=this.emp.MonthlyRate;
    this.NumCompaniesWorked=this.emp.NumCompaniesWorked;
    this.Over18=this.emp.Over18;
    this.OverTime=this.emp.OverTime;
    this.PerformanceRating=this.emp.PerformanceRating;
    this.RelationshipSatisfaction=this.emp.RelationshipSatisfaction;
    this.StandardHours=this.emp.StandardHours;
    this.StockOptionLevel=this.emp.StockOptionLevel;
    this.TotalWorkingYears=this.emp.TotalWorkingYears;
    this.TrainingTimesLastYear=this.emp.TrainingTimesLastYear;
    this.WorkLifeBalance=this.emp.WorkLifeBalance;
    
  }

  addEmployee()
  {
    var val ={
      EmployeeId:this.EmployeeId,
      EmployeeCount:this.EmployeeCount,
      Age:this.Age,
      Attrition:this.Attrition,
      BusinessTravel:this.BusinessTravel,
      DailyRate:this.DailyRate,
      Department:this.Department,
      DistanceFromHome:this.DistanceFromHome,
      Education:this.Education,
      EducationField:this.EducationField,
      EmployeeNumber:this.EmployeeNumber,
      EnvironmentSatisfaction:this.EnvironmentSatisfaction,
      Gender:this.Gender,
      HourlyRate:this.HourlyRate,
      JobInvolvement:this.JobInvolvement,
      JobLevel:this.JobLevel,
      JobRole:this.JobRole,
      MaritalStatus:this.MaritalStatus,
      MonthlyIncome:this.MonthlyIncome,
      MonthlyRate:this.MonthlyRate,
      NumCompaniesWorked:this.NumCompaniesWorked,
      Over18:this.Over18,
      OverTime:this.OverTime,
      PerformanceRating:this.PerformanceRating,
      RelationshipSatisfaction:this.RelationshipSatisfaction,
      StandardHours:this.StandardHours,
      StockOptionLevel:this.StockOptionLevel,
      TotalWorkingYears:this.TotalWorkingYears,
      TrainingTimesLastYear:this.TrainingTimesLastYear,
      WorkLifeBalance:this.WorkLifeBalance,

    };
    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });

  }

}
