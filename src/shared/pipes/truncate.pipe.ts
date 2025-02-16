import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, limit: number = 30, trail: string = '...'): string {
    if (value == null) {
      return '';
    }
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
