import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { AgacEkleComponent } from './components/agac-ekle/agac-ekle.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-student' },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'students-list', component: StudentsListComponent },
  { path: 'agac-ekle', component: AgacEkleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }