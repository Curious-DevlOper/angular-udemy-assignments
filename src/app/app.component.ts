import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'my-second-app';
  pass: string = ' tuna';
  isPassHidden = false ;
  logsNum : number= 0 ;
  logs: string[] = [];
  blueBackgroundIndex: number = 4;
 
  togglePass(event: any) {
    this.isPassHidden = ! this.isPassHidden;
    this.logsNum ++;
    const logMessage = 'log results: ' + this.logsNum;
    console.log(logMessage);
    this.logs.push(logMessage);
  }
}
