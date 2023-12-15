import { Pipe, PipeTransform } from '@angular/core';
import { singleperson } from './singleperson';

@Pipe({
  name: 'countLocation'
})
export class CountLocationPipe implements PipeTransform {

  transform(people:singleperson[], locationName:string): number {
    let count = 0;
    people.forEach(person => {
      if (person.location?.locationName == locationName){
        count++;
      }
    })
    return count;
  }

}
