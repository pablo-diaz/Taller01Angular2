import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { ITeacherService } from '../shared/defs/teacher.service';
import { Teacher } from '../../core/teacher.model';

import { SortDirection } from '../../shared/sort-direction.enum';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  public teachers: Teacher[];
  
  private lastSortedProperty: string = '';
  private sortedOrientation: SortDirection = SortDirection.ASC;
  
  constructor(@Inject('ITeacherService') private _teacherService: ITeacherService, private router: Router) { }

  ngOnInit() {
    this._teacherService.listTeachers().subscribe((t) => {
      this.teachers = t;
      this.sortBy('name');
    });
  }

  public onSelect(teacher: Teacher) {
    this.router.navigate(['/editteacher', teacher.id]);
  }

  public newTeacher() {
    this.router.navigate(['/addteacher']);
  }

  public sortBy(property: string): void {
    if(this.lastSortedProperty === property) {
      this.sortedOrientation = this.sortedOrientation === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC;  
    }
    else {
      this.lastSortedProperty = property;
      this.sortedOrientation = SortDirection.ASC;
    }

    let sortFactor = this.sortedOrientation === SortDirection.ASC ? 1 : -1;
    this.teachers.sort((a: Teacher, b: Teacher) => a[property].localeCompare(b[property]) * sortFactor);
  }

}
