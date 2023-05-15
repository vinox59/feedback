import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  lang: any[] = ['Deutsch','English','Español','Français','Italiano','Nederlands','Polski','Русский',
    'Sinugboanong Binisaya','Svenska','Tiếng Việt','Winaray'];
}
