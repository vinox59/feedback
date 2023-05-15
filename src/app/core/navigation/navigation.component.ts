import { Component } from '@angular/core';
import { AppService } from '../../app.service'
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  selectedRoleVal: string = 'admin';

  constructor(private _service: AppService) {}

  selectedRole(role: string) {
    this.selectedRoleVal = `${role}`;
    this._service.updateRole(role);
  }
}
