import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
//emit an event which allow us determine whcih component to choose 
  @Output() featureSelected= new EventEmitter<string>();
  onSelect(feature: string) {
    this.featureSelected.emit(feature);

  }
}
