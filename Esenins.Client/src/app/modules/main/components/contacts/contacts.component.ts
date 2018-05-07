import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ContactsMessageModel } from '../../../shared/models/contacts-message.model';
import { ContactsService } from '../../../shared/services/contacts/contacts.service';

@Component({
  selector: 'es-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  model: ContactsMessageModel = { from: '', body: '' };
  sent = false;

  constructor(private contacts: ContactsService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  submit() {
    this.contacts.sendMessage(this.model).subscribe(() => {
      this.sent = true;
      this.model.body = '';
      this.model.from = '';
      this.cdr.detectChanges();
      setTimeout(() => {
        this.sent = false;
        this.cdr.detectChanges();
      }, 2000);
    });
  }

}
