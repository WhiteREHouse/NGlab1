import { Component, ChangeDetectorRef } from '@angular/core';
import { Item } from '../item.class';

@Component({
  selector: 'app-second',
  template: `
    <div bordered>
    <p>Добавить данные</p>
    <input [(ngModel)]="name" placeholder="Название">
    <input [(ngModel)]="quantity" placeholder="Количество">
    <button (click)="sendData()">Отправить</button>
    <p *ngIf="foundBool">More than 60 found!</p>
    <p *ngIf="!foundBool">No more than 60 found!</p>
    <app-third [gottenItem]="itemToSend" (found)="found($event)" ></app-third>
    </div>
  `,
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
  name = '';
  quantity = 0;
  itemToSend: Item = new Item('', 0);
  foundBool = false;
  found(found: any): void{
    this.foundBool = found;
    this.changeDetectorRef.detectChanges();
  }
  sendData(): void{
    this.itemToSend = new Item(this.name, this.quantity);
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

}
