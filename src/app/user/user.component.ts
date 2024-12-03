import { Component, signal, computed , Input} from '@angular/core';
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

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // // get imagePath(){
  // //   return 'assets/users/' + this.selectedUser().avatar
  // //   //this is to access properties of a class from within the same class
  // // };
 @Input() avatar!:string;
 @Input() name!:string;
get imagePath(){
    return 'assets/users/' + this.avatar
}
  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]); //set is used to set the value of a signal 
  }
}
