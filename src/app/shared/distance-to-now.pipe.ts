import { Pipe, PipeTransform } from '@angular/core';
import * as parse from 'date-fns/parse';
import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

@Pipe({
  name: 'distanceToNow',
  pure: true
})
export class DistanceToNowPipe implements PipeTransform {

  transform(value: number | string | Date, includeSeconds?: boolean): string {
    const args = { includeSeconds }
    return distanceInWordsToNow(parse(value), args);
  }
}
