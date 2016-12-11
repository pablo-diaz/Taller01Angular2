import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';

import { TeacherService } from './shared/teacher.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TeacherListComponent, TeacherEditComponent, TeacherAddComponent],
  providers: [{provide: 'ITeacherService', useClass: TeacherService}]
})
export class TeacherModule { }
