import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <div bordered>
      <h3>Добро пожаловать, {{userNameConfirmed}}!</h3>
      <input [(ngModel)]="userName" placeholder="Имя пользователя">
      <button (click)="nameConfirm()">Подтвердить</button>
    </div>
  `,
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  userName = '';
  userNameConfirmed = 'Пользователь';
  nameConfirm(): void{
    this.userNameConfirmed = this.userName;
  }

  constructor() { }

}
