import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UC5_UserInputEventBinding';
  imgUrl = "https://images.yourstory.com/cs/images/companies/logo-1586419574337.jpg?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=384&q=75"
  url = "https://www.bridgelabz.com"

  userName: string = "";
  nameError: string = "";
  ngOnInit(): void {
    this.title = "Hello From BridgeLabz";
  }

  onClick($event: any) {
    console.log("Save button is clicked", $event);
    window.open(this.url, "_blank")
  }

  onInput($event: any) {
    console.log("Change Event Ocurred", $event.data);
    const nameRegex = RegExp('^[A-Z][a-zA-z\\s]{2,}$');
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is incorrect!";
  }
}