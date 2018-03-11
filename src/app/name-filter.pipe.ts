import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter',
  pure: false
})

export class NameFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items || !value) {
      return items;
    } else {
      return items.filter(it => it[field].toLowerCase().startsWith(value.toLowerCase()));
    }
  }
}
