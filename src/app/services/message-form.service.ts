import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageFormService {

  constructor(private http:HttpClient) { }

  sendForm(name:any, email:any, message:any): Observable<any>{
    return this.http.post('https://formspree.io/f/mvoldpbl', { name: name, replyto: email, message: message })
  }

}
