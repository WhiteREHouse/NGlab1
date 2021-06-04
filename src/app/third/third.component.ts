import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Item } from '../item.class';


@Component({
  selector: 'app-third',
  template: `
    <div bordered>
    <div><p>Имеющиеся данные:</p></div>
      <p *unless="items.length > 5">List is not longer than 5!</p>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Предмет</th>
        <th>Цена</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let item of items">
        <td>{{item.name}}</td>
        <td>{{item.quantity}}</td>
      </tr>
      </tbody>
    </table>
    </div>
  `,
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnChanges{
  @Input() gottenItem: Item = {name: '', quantity: 0};
  @Output() found = new EventEmitter<boolean>();
  items: Item[] =
    [
      { name: 'test1', quantity: 15.9 },
      { name: 'test2', quantity: 60 },
      { name: 'test3', quantity: 22.6 },
      { name: 'test4', quantity: 59 }
    ];
  addItem(item: Item): boolean {
    if (item.name == null || item.name.trim() === '' || item.quantity == null || item.quantity === 0) {
      return false;
    }
    this.items.push(new Item(item.name, item.quantity));
    return true;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.addItem(changes.gottenItem.currentValue)){
      for (let i of this.items) {
        if (i.quantity > 60){
          this.found.emit(true);
        }
      }
    }
  }

  constructor() { }

}
