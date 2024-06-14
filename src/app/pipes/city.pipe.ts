import { Pipe, PipeTransform } from '@angular/core';
import { City } from '@lib/types';
@Pipe({
  standalone: true,
  name: 'city',
})
export class CityPipe implements PipeTransform {
  transform(city: City): string {
    return City[city]
  }
}
