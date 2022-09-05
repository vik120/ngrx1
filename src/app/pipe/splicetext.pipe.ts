import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splicetext'
})
export class SplicetextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }

}
