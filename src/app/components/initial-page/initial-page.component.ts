import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss'],
})
export class InitialPageComponent implements OnInit {
  @Input() translations: any;
  sendBack: boolean = false;

  constructor() {}

  ngOnInit() {}
}
