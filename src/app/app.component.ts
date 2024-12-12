import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSessionComponent } from "./hero-session/hero-session.component";
import { CardComponent } from "./card/card.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroSessionComponent, CardComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appCardapio';
}
