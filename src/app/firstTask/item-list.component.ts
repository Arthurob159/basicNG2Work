import { Component, OnInit, ViewChildren } from '@angular/core';
import {ItemService, ItemModel} from './item.service';
import {FilterByPipe} from '../shared/pipe/filter-list.pipe';
import {ItemFilterComponent} from './item-filter.component';

@Component({
  moduleId: 'module.id',
  // styleUrls: [`monster.css`],
//   pipes: [FilterByPipe],
//   directives: [ItemFilterComponent, ItemDetailsComponent],
  // selector: 'monster-list',
  template: `
    <section>
      <h2>Items</h2>
      <item-filter>filter...</item-filter>

      <table>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Code</th>
            <th>Release Date</th>
            <th>Description</th>
            <th>Price</th>
            <th>Star Rating</th>
            <th>Image Url</th>
            <th>Action</th>
        </tr>
        <tr *ngFor="let item of items">
            <td>{{item.id}}</td>
            <td><a routerLink="./{{item.id}}" routerLinkActive="active">{{item.name}}</a></td>
            <td>{{item.code}}</td>
            <td>{{item.releaseDate}}</td>
            <td>{{item.description}}</td>
            <td>{{item.price}}</td>
            <td>{{item.starRating}}</td>
            <td>{{item.imageUrl}}</td>
            <button class="btn btn-danger" (click)="removeItem(item.id)">Delete</button>
        </tr>
      </table>
    </section>
  `
    //   <item-filter (filterChange)="filter = $event"></item-filter>
            // <item-details [item]="item"></item-details>
})
export class ItemListComponent implements OnInit {
//   private filter = {byName: '', byPower: ''};
  private items : ItemModel[];

  constructor(private itemService : ItemService) { }

  ngOnInit() {
      console.log('oninit..');
      
    const prmItems = this.itemService.query();

    prmItems.then((items : ItemModel[]) => {
              console.log('items:',items);

      this.items = items;
    });

    prmItems.catch(err => {
      alert('Sorry,cannot load the items, try again later');
      console.log('Cought an error in ItemList', err);
    });
  }
  removeItem(itemId : number) {
    this.itemService.remove(itemId)
      .then((items : ItemModel[])=>{
        this.items = items;
      });
  }
}
