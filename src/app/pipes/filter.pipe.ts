import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any, nameFilter: any): any {
    if (nameFilter === undefined) return list;
    return list.filter(item => {
      return item.name.toLowerCase().includes(nameFilter.toLowerCase());
    })
  }
}

