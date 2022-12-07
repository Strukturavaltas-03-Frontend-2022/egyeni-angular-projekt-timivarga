import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movie'
})
export class MoviePipe <T extends  { [x: string]: any }> implements PipeTransform {

  transform(value: T[], phrase: string = '', key: string = ''): T[] {
    if (!Array.isArray(value) || !phrase || !key) {
      return value;
    }

    phrase = phrase.toLowerCase();

    return value.filter(item => {
      return ('' + item[key]).toLowerCase().includes(phrase);
    });
  }

 }
