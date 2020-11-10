import {Component} from '@angular/core';
import {ComboServices} from './combo.services';
@Component({
selector: 'app-combo',
template: `
    <h2>{{title}}</h2>
     <ul>
         <li *ngFor="let combo of combos">
             {{combo}}

         </li>
     </ul>
`
})


export class ComboComponent {
 title = 'List of combo';
 combos;
 constructor(service: ComboServices){
     this.combos = service.getCourses();
 }


}

