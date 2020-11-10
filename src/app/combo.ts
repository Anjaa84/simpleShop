import {Component} from '@angular/core';
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
 combos = ['c1', 'c2', 'c3'];


}

