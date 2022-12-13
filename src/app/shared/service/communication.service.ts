import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
public activePage:Subject<string>;
  constructor() {
    this.activePage=new Subject;
   }
}
