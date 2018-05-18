import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactsMessageModel } from '../../models/contacts-message.model';

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) { }

  sendMessage(message: ContactsMessageModel) {
    return this.http.post(`/Contacts`, message);
  }
}
