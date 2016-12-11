import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TeacherComponent, TeacherListComponent, TeacherEditComponent, TeacherAddComponent]
})
export class TeacherModule { }
