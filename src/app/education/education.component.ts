import { Component, OnInit } from '@angular/core';
import { institutes } from './institute-data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  allInstitutes = institutes;

  constructor() { }

  ngOnInit(): void {
  }

}
