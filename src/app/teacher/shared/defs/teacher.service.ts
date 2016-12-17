import { Teacher } from '../../../core/teacher.model'

import { Observable } from 'rxjs/Rx';

export interface ITeacherService {
    listTeachers(): Observable<Teacher[]>;
    getTeacher(id: number): Observable<Teacher>;
    updateTeacher(teacher: Teacher): Observable<Teacher>;
    addTeacher(teacher: Teacher): Observable<Teacher>;
}