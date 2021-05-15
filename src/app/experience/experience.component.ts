import { Component, OnInit } from '@angular/core';
import { companies } from './companies-data';
import { CompanyInterface } from './company.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  allCompanies = companies;

  constructor() { }

  ngOnInit(): void {
  }

}
