import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemService, ItemModel} from './item.service';


@Component({
  moduleId: 'module.id',
//   styleUrls: [`monster.css`],
  // selector: 'monster-list',
  template: `
    <section *ngIf="item">
      <a routerLink="../" routerLinkActive="active">Go Back</a>
      <h2>Id: {{item.id}}</h2>
      <h2>Name: {{item.name}}</h2>
      <h4>Code: {{item.code}}</h4>
      <h4>Release Date: {{item.releaseDate}}</h4>
      <h4>Description: {{item.Description}}</h4>
      <h4>Price: {{item.price}}</h4>
      <h4>Star Rating: {{item.price}}</h4>
      <img [src]="item.imageUrl">
    </section>
  `
})
export class ItemComponent implements OnInit {

  private item : ItemModel;

  constructor(
                private route: ActivatedRoute,
                private itemService : ItemService
  ) { }

  ngOnInit() {
   this.route.params.subscribe(params => {
     const id = +params['id'];
     const prmItem = this.itemService.get(id);
     prmItem.then((item: ItemModel) => {
       this.item = item;
     });
   });
  }



}
