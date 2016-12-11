import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';

const teacherRoutes: Routes = [
  { path: 'teachers',  component: TeacherListComponent },
  { path: 'addteacher',  component: TeacherAddComponent },
  { path: 'editteacher/:id', component: TeacherEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(teacherRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TeacherRoutingModule { }