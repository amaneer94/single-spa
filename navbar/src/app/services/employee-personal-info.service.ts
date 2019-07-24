import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { EmployeePersonal, EmployeePersonalObj } from "../models/employee-personal";
import { Observable } from "rxjs/index";
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { AppSettings } from '../app.settings';


@Injectable({
  providedIn: 'root'
})
export class EmployeePersonalInfoService {

  public employeePersonalInfo;
  REST_END_POINT = `${AppSettings.API_ENDPOINT_EMPLOYEE_PERSONAL}/employees/`;


  constructor(private http: AuthService) {
    // this.employeePersonalInfo = new EmployeePersonalInfo();

  }

  getEmployeePersonalInfo(employeeId: any): Observable<any> {
    return this.http.get(this.REST_END_POINT + employeeId).pipe(
      map((res) => {
        return res;
      })
    );
  }

  activateUser(payload) {
    return this.http.post(`${AppSettings.LOGIN_API_URL}activation`, payload).pipe(
      map((res) => {
        return res;
      })
    );
  }

  updateEmployeePersonalInfo(empPersonalInfo) {
    console.log('Emp: ', empPersonalInfo)
    return this.http.put(this.REST_END_POINT + empPersonalInfo._id, empPersonalInfo).pipe(
      map((res) => {
        // console.log(res);
      })
    );
  }

  // deleteEmployeePersonalInfo() {
  //   return this.http.delete(this.REST_END_POINT + this.employeePersonalInfo._id).pipe(
  //     map((res) => {
  //       // console.log(res);
  //     })
  //   );
  // }




  // public addEmployeePersonalInfo(employeePersonalInfo: EmployeePersonal) {
  //   return this.http.post(`${AppSettings.API_ENDPOINT_EMPLOYEE_PERSONAL}/employees`, employeePersonalInfo);
  // }

  // public getAllEmployees(): Observable<EmployeePersonalObj> {
  //   return this.http.get(`${AppSettings.API_ENDPOINT_EMPLOYEE_PERSONAL}/employees`).pipe(
  //     map(data => {
  //       return <EmployeePersonalObj>data;
  //     })
  //   )
  //   // return this.http.get<EmployeePersonalInfo[]>('http://10.28.82.172:8000/employee-personal-service/api/v1/employees').pipe();
  // }

}


export interface Email {
  email: string;
  isPrimary: boolean;
}

// export class EmployeePersonalInfo {
//   _id: string;
//   oid: string;
//   code: string;
//   name: string;
//   callingName: string;
//   fatherName: string;
//   cnic: string;
//   cnicExpiry: Date;
//   dateOfBirth: Date;
//   gender: string;
//   maritalStatus: string;
//   religion: string;
//   nationality: string;
//   smoking: boolean;
//   passportNo: string;
//   passportExpiry: Date;
//   drivingLicenseExpiry: Date;
//   bloodGroup: string;
//   emails: Email[];
//   isLdap: boolean;

// }
