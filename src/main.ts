import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
//This function tells Angular that there is an app component and that it should look for this component's tag in the index HTML file to display the content of this component on the screen.

