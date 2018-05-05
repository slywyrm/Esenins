import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactsMessageModel } from '../../models/contacts-message.model';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class ContactsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  sendMessage(message: ContactsMessageModel) {
    return this.http.post(`${this.apiUrl}/Contacts`, message);
  }
}
