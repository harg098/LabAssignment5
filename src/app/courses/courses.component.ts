import { Component, OnInit } from '@angular/core';

interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  course: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  students: Array<IStudent> = [];
  private scold: string;

  editMode: boolean = false;
  constructor() {
    this.students[0] = {
      id: 1,
      firstName: 'Harinder',
      lastName: 'Gill',
      course: 'Programming'
    }
    this.students[1] = {
      id: 2,
      firstName: 'Bill',
      lastName: 'Nye',
      course: 'Science'
    }
    this.students[2] = {
      id: 2,
      firstName: 'Donald',
      lastName: 'Trump',
      course: 'Politics'
    }
    this.students[3] = {
      id: 4,
      firstName: 'Chris',
      lastName: 'Hemsworth',
      course: 'Acting'
    }
  }

  ngOnInit() {
  }

  addStudent() {
    this.editMode = true;
    const student: IStudent = {
      id: null,
      firstName: null,
      lastName: null,
      course: null
    };

    // this.students.push(student);
    this.students.unshift(student);
  }
  removeStudent(index: number) {
    this.students.splice(index, 1);
  }

  saveStudent() {
    this.editMode = false;
  }

}