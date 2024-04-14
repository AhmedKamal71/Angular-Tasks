import { Routes } from '@angular/router';
import { AllStudentsComponent } from './Components/all-students/all-students.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';

export const routes: Routes = [
    {path:"", redirectTo:"students", pathMatch:"full"},
    {path:"students", component:AllStudentsComponent},
    {path:"students/:id", component:StudentDetailsComponent},
    {path:"add", component:AddStudentComponent},
    {path:"update/:id", component:UpdateStudentComponent},
    {path:"**", component:UpdateStudentComponent},
];
