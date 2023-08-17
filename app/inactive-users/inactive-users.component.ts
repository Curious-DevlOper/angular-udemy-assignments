import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent  {
  @Input() users : string[];
  //@Output() userSetToActive = new EventEmitter<number>();
  constructor(private usersService: UserService){}


  onSetToActive(id: number){
    this.usersService.setToactive(id);

  }

}
