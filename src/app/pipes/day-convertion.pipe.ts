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

  default:
    const Time = value.End.getTime() - value.start.getTime()
    console.log(Time)
    const x = (Time)/(1000 * 3600 * 24)
    return `years:${Math.floor(x/365)}, months:${Math.floor(x % 365 / 30)},
    weeks:${Math.floor(x % 365 % 30 / 7)}, days:${Math.floor(x % 365 % 30 % 7)}`
}

  }

}
