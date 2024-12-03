import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';

@Component({ //decorator
  selector: 'app-root', //tell angular which element it should look in html code 
  standalone: true,
  imports: [HeaderComponent,UserComponent],
  templateUrl: './app.component.html', // markup is stored in this file
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
}
