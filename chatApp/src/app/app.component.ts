import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as dassta from "../assets/data.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private htttp: HttpClient) { }
  title = 'chatApp';
  messages: any[];
  currentMessage = "ss";

  ngOnInit() {
    this.htttp.get("../assets/data.json").subscribe(result => {
      console.log( result);
      this.messages = result["messages"];
    });
  }

  public sendMessage(){
    console.log("send MEssage called : " , this.currentMessage);
    this.messages.push({content : this.currentMessage});
    this.messages = [...this.messages];
    this.currentMessage = "";
  }

}
