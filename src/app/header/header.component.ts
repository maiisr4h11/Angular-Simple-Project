import { Component } from '@angular/core'; // to import the Component decorator


@Component({
    selector : 'app-header',
    standalone: true, //in the past Angular only knew module based components but then it introduce a Standalone component
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']



})

export class HeaderComponent {}