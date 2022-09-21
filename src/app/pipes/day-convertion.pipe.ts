import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayConvertion'
})
export class DayConvertionPipe implements PipeTransform {
  transform(value: any,args:any): any {
    console.log(value);
    
    

switch (args) {

  case "DateFormat":
    return `${value}`;
    
  case "Days":
    const day = value.End.getTime() - value.start.getTime()
    console.log(day)
    const y = (day)/(1000 * 3600 * 24)
    return y;

  default:
    const Time = value.End.getTime() - value.start.getTime()
    console.log(Time)
    const x = (Time)/(1000 * 3600 * 24)
    return `${Math.floor(x/365)} year(s), ${Math.floor(x % 365 / 30.5)} month(s),
    ${Math.floor(x % 365 % 30 / 7)} week(s), ${Math.floor(x % 365 % 30 % 7)} day(s)`
}

  }

}
