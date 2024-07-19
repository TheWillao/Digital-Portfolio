import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  message!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { translations: any }) {}

  ngOnInit() {
    this.message = encodeURIComponent(this.data?.translations?.whatsAppMessage);
  }
}
