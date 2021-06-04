import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `<div bordered><app-first></app-first>
  <app-second></app-second></div>`
})
export class AppComponent {
  title = 'lab1';

}
