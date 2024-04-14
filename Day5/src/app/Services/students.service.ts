import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }
  private Api_Url = "http://localhost:3000/Students"
  GetAllStudents(){
    return this.http.get(this.Api_Url)
  }
  GetStudentById(id:any){
    return this.http.get(this.Api_Url+"/"+id)
  }
  AddStudent(student:any){
    return this.http.post(this.Api_Url,student)
  }
  UpdateStudent(id:any,student:any){
    return this.http.put(this.Api_Url+"/"+id,student)
  }
  DeleteStudent(id:any){
    return this.http.delete(this.Api_Url+"/"+id)
  }
}
