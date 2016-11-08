import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy',
  pure: false
})

export class FilterByPipe implements PipeTransform {
  transform(list: any[], filter: any): any {
    console.log('FilterByPipe:', filter);

    return list.filter(item=>{
      return item.name.toLowerCase()
              .indexOf(filter.byName.toLowerCase()) !== -1 &&
             (!filter.byId || item.id === filter.byId)
    })
  }
}
