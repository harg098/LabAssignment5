import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
}

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  students: Array<IStudent> = [];

  editMode: boolean = false;

  constructor() {
    this.students[0] = {
      id: 1,
      firstName: 'Harinder',
      lastName: 'Gill',
      course: 'Programming'
    }
    this.students[1] = {
      id: 1,
      firstName: 'Bill',
      lastName: 'Nye',
      course: 'Science'
    }
    this.students[2] = {
      id: 1,
      firstName: 'Donald',
      lastName: 'Trump',
      course: 'Politics'
    }
    this.students[3] = {
      id: 1,
      firstName: 'Chris',
      lastName: 'Hemsworth',
      course: 'Acting'
    }
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
  console.log('from removeStudent function index: ', index);
  this.students.splice(index, 1);
}

saveStudent() {
  this.editMode = false;
}

  ngOnInit() {
  }

}