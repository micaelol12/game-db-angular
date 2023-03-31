import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brDatePipe'
})
export class BrDatePipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return new Date(value).toLocaleDateString('pt-Br');
  }

}
