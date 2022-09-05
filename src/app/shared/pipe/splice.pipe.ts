import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splice'
})
export class SplicePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return value.length > args[0] ? value.slice(0,args[0])+'...' : value
    //return value;
  }

}
