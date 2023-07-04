import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  styles: [`
    h3 {
      color: darkred;
    }
  `]
})
export class AppComponent {
  title = 'my-second-app';
  username: string = 'Initial Username';
  allowReset = true;

  checkInput() {
    this.allowReset = this.username == '' ?  true : false;
  }

  restUsername(){

    this.username = '';

  }
}
