
export class CounterService {
    actToInactCounter = 0;
    inactToactCounter = 0;
    incrementActToInact(){
        this.actToInactCounter++;
        console.log('Active to inactive: ' + this.actToInactCounter);
    }
    incrementInactToAct(){
        this.inactToactCounter++;
        console.log('inactive to active: ' + this.inactToactCounter);
    }

}