import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(1,'Anushka',10000,"JAVA"),
   new Employee(2,'Aditya',20000,"Angular"),
   new Employee(5,'Harsh',20000,"Js"),
   new Employee(4,'Srashti',20000,"Java"),
   new Employee(3,'Himanshu',20000,"Angular")
];   
 
 

  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}