import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  transform(value: Date): string {
    const splitDate: string[] = value.toString().split('-');
    const month: string = this.months[parseInt(splitDate[1])];
    const day: string = splitDate[2];
    const year: string = splitDate[0];
    return `${month} ${day}, ${year}`;
  }

}
