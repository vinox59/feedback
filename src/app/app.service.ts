import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  selectedRoleSubject$ = new BehaviorSubject<string>('admin');
  constructor() { }

  updateRole(role: string) {
    this.selectedRoleSubject$.next(role);
  }
}
