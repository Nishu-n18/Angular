import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UC4_UserInput';
  imageurl = "https://i.pinimg.com/736x/71/d9/a9/71d9a9a5614ec8a9a17079ace15f10a0.jpg";
  url = "http://www.bridgelabz.com";
  userName: string="";
  ngOnInit(): void {
    this.title = "Hello from BridgeLabz";
  }
  onClick($event: any) {
    console.log("Save button is clicked", $event);
    window.open(this.url, "_blank");
}
}
