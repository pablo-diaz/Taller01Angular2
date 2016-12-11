import { Teacher } from '../../../core/teacher.model'

export interface ITeacherService {
    listTeachers(): Teacher[];
    getTeacher(id: number): Teacher;
    updateTeacher(teacher: Teacher): void;
    addTeacher(teacher: Teacher): void;
}