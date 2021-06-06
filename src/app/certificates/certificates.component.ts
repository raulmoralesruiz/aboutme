import { Component, OnInit } from '@angular/core';
import { certificates } from './certificates-data';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  allCertificates = certificates;

  constructor() { }

  ngOnInit(): void {
  }

}
