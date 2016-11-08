import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  moduleId: 'module.id',
  selector: 'item-filter',
  outputs: ['filterChange'],
  template: `
      <section>
        Search: <input type="text" [(ngModel)]="filter.byName" (input)="filterChanged()" />
      </section>
  `
})
export class ItemFilterComponent implements OnInit {

  private filterChange = new EventEmitter();

  private filter = {byName: ''};
  constructor() { }

  ngOnInit() { }
  filterChanged() {
    this.filterChange.emit(this.filter);
  }

}
