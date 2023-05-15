import { Component } from '@angular/core';
import { AppService } from '../app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'feedbackApp';
  selectedRole!: string;
  constructor(private _service: AppService) {
    this._service.selectedRoleSubject$.subscribe(role => {
      this.selectedRole = role;
    })
  }
}
