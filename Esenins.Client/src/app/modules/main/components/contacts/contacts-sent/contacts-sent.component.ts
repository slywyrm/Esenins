import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ContactsService } from '../../../../shared/services/contacts/contacts.service';

@Component({
  selector: 'es-contacts-sent',
  templateUrl: './contacts-sent.component.html',
  styleUrls: ['./contacts-sent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsSentComponent implements OnInit {
  opacity = 0;
  active: boolean;

  @Input() set sent(value: boolean) {
    this.changeActive(value);
  }

  constructor(private contactsService: ContactsService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  changeActive(active: boolean) {
    if (active) {
      this.active = true;
      setTimeout(() => {
        this.opacity = 1;
        this.cdr.detectChanges();
      });
    } else {
      this.opacity = 0;
      setTimeout(() => {
        this.active = false;
        this.cdr.detectChanges();
      }, 500);
    }
  }

  close() {
    this.changeActive(false);
  }

}
