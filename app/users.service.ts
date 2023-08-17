import { EventEmitter, Injectable} from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable() //add some metadata to inject service

export class UserService {
  activeUsers = ['Anna', 'max'];
  inactiveUsers = ['chris', 'manu'];

  constructor(private counterService: CounterService) {}

  userSetToInactive = new EventEmitter<number>();
  userSetToActive = new EventEmitter<number>();

  setToInactive(id: number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementInactToAct();
    }
  setToactive(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementActToInact();

  }
}