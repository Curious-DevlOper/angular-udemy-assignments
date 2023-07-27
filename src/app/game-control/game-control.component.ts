import { Component, EventEmitter, Output } from '@angular/core';

// The GameControl component will be responsible for starting and stopping a game that displays odd and even numbers.
//  It will emit events to inform the parent component about the next number to display.

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  gameRunning: boolean = false;
  numberToIncr: number = 0;
  intervalRef: any ; //Refrence to the interval
  @Output() numberGenerated = new EventEmitter<number>();



  startGame() {
    this.gameRunning = true;
    // Start the interval to increment the number continuously
    this.intervalRef = setInterval(() => {
      this.numberGenerated.emit(this.numberToIncr + 1) ;
      this.numberToIncr++;

    }, 1000); // Increment the number every 1000ms (1 second)
   
  }
  stopGame(){
    setTimeout(()=> {
      this.gameRunning = false;
     // console.log(this.gameRunning);
    }, 2000);
    // Clear the interval to stop incrementing the number
    clearInterval(this.intervalRef);
  }

 
}
