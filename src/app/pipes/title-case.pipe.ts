import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string) {
    if(!value) return null;

    let words = value.split(' ');

    for(let [index, word] of words.entries()) {
      if(index > 0 && this.isPreposition(word)) {
        words[index] = word.toLocaleLowerCase();
      } else {
        words[index] = this.toTitleCase(word);
      }
    }
    return words.join(' ');
  }

  private isPreposition(word: string): boolean {
    let prepositions = [
      'of',
      'the'
    ];
    return prepositions.includes(word.toLocaleLowerCase());
  }

  private toTitleCase(word) {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLocaleLowerCase();
  }
}
