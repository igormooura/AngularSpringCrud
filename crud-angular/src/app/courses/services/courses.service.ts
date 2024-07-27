import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root' //a instancia da classe vai ser fornecida na raiz do projeto
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Course[]{
    return [
      { _id: '1', name:"Angular", category:"front-end"}];
  }
}
