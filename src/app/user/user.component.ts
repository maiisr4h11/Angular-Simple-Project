import { Component } from '@angular/core';
import  {DUMMY_USERS} from '../dummy-users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); // should give random number from 0 to 5 as we have 6 users
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  selectedUser = DUMMY_USERS[randomIndex];
  get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar
    //this is to access properties of a class from within the same class
  };
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
