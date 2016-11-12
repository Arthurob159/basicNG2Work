import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class ItemModel {

  constructor(public id: number, 
              public name: string, 
              public code: string, 
              public releaseDate: string, 
              public description: string, 
              public price: number, 
              public starRating: number, 
              public imageUrl: string) {
  }
}

@Injectable()
export class ItemService {

  private baseUrl = 'http://mrjson.com/data/58208db7fd12d71a2fe2363e/item/';
  constructor(private http: Http) {}

  query(): Promise<ItemModel[]> {

    let prmItems = this.http.get(this.baseUrl + 'list.json')
      .toPromise()
      .then(res => {
        const jsonItems = res.json();
        console.log('items from service:',jsonItems);
        return jsonItems.map(jsonItem =>
          new ItemModel(jsonItem.id, jsonItem.name, jsonItem.code, jsonItem.releaseDate, 
                        jsonItem.description, jsonItem.price, jsonItem.starRating, jsonItem.imageUrl))
      });

    prmItems.catch(err => {
      console.log('Problem talking to server');
    });

    return prmItems;
  }

  get(id: number) : Promise<ItemModel> {
      console.log('hi im here');
      
    let prmItem = this.http.get(this.baseUrl + id + '.json')
      .toPromise()
      .then(res => {
        const jsonItem = res.json();
        return new ItemModel(jsonItem.id, jsonItem.name, jsonItem.code, jsonItem.releaseDate, 
                             jsonItem.description, jsonItem.price, jsonItem.starRating, jsonItem.imageUrl);
      });

    prmItem.catch(err => {
      console.log('Problem talking to server');
    });
    return prmItem;

  }

  remove(id: number) : Promise<ItemModel[]> {
    let prmItem = this.http.delete(this.baseUrl + id + '.json')
      .toPromise()
      .then(res => {
        return this.query();

      });

    prmItem.catch(err => {
      console.log('Problem talking to server', err);
    });
    return prmItem;
  }

//   save(monsterData: any, id?: number) : Promise<MonsterModel>{

//     let response : any;
//     let prmMonster : Promise<MonsterModel>;

//     if (id) {
//       const url = this.baseUrl + id + '.json'
//       response = this.http.put(url, monsterData)
//     } else {
// 	    const url = this.baseUrl + 'item.json';
//        response = this.http.post(url, monsterData)
//     }

//     prmMonster = response.toPromise()
//       .then(res => {
//           const jsonMonster = res.json();
//           return new MonsterModel(jsonMonster.name, jsonMonster.power, jsonMonster.id);
//       });

//     prmMonster.catch(err => {
//       console.log('Problem talking to server', err);
//     });
//     return prmMonster;
//   }
}
