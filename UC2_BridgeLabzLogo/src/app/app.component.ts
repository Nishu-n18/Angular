import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UC2_BridgeLabzLogo';
  imageurl ="https://i.pinimg.com/736x/71/d9/a9/71d9a9a5614ec8a9a17079ace15f10a0.jpg";
  ngOnInit(): void{
    this.title="Welcome to BridgeLabz"

  }
}
