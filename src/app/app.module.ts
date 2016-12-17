import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TeacherModule } from './teacher/teacher.module';
import { CourseModule } from './course/course.module';
import { HomeModule } from './home/home.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './shared/InMemoryDataService.mock';

//import { TeacherService } from './teacher/shared/teacher.service';
import { TeacherHttpService } from './teacher/shared/teacher-http.service';

//import { CourseService } from './course/shared/course.service';
import { CourseHttpService } from './course/shared/course-http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TeacherModule,
    CourseModule,
    HomeModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    { provide: 'ITeacherService', useClass: TeacherHttpService },
    { provide: 'ICourseService', useClass: CourseHttpService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
