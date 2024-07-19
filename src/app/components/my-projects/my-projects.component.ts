import { Component, Input, OnInit } from '@angular/core';
import { myProjects } from './my-projects';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss'],
})
export class MyProjectsComponent implements OnInit {
  @Input() translations: any;
  myProjects = myProjects;

  constructor() {}

  ngOnInit() {}
}
