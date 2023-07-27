import { Component, Input } from '@angular/core';
// responsible for displaying the odd numbers emitted by the GameControl component.
@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent {
  @Input() number: number ;



}
