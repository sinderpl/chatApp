import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages = [{content : "hishhs"},
  {content : "hhhhs"}];
  title = 'Welcome to the chat app !';
}
