import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipeT'
})
export class DatePipeTPipe implements PipeTransform {
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  transform(value: Date): string {
    const splitDate1: string[] = value.toString().split('T');
    const splitDate2: string[] = splitDate1[0].toString().split('-');
    const month: string = this.months[parseInt(splitDate2[1]) - 1];
    const day: string = splitDate2[2];
    const year: string = splitDate2[0];
    return `${month} ${day}, ${year}`;
  }
}
