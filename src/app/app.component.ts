import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'my-forth-app';
  loadedFeature='recipe'; //store the feature

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  
}
