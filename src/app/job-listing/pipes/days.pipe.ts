import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'days',
})
export class DaysPipe implements PipeTransform {
  transform(numberOfDays: number): string {
    if (numberOfDays < 7) return Math.round(numberOfDays) + 'd ago';
    else if (numberOfDays < 30) return Math.round(numberOfDays/7) + 'w ago';
    return Math.round(numberOfDays/30) + 'mo ago';
  }
}
