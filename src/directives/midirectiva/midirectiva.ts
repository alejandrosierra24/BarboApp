import { Directive } from '@angular/core';

/**
 * Generated class for the MidirectivaDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[midirectiva]' // Attribute selector
})
export class MidirectivaDirective {

  constructor() {
    console.log('Hello MidirectivaDirective Directive');
  }

}
