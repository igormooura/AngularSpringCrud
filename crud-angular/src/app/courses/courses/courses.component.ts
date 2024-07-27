import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { Course } from '../model/course'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  //validações basicas e o que deve aparecer na tela
  courses: Course[] = [];
  displayedColumns = ["name", "category"];

  constructor(private coursesService : CoursesService){

  }

  ngOnInit(): void {
    this.courses = this.coursesService.list();
  }

}
