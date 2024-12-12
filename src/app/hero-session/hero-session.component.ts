import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-session',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-session.component.html',
  styleUrl: './hero-session.component.scss'
})
export class HeroSessionComponent implements OnInit {
  isOpen: boolean = false;

  ngOnInit(): void {
    this.checkBusinessHours();
  }

  // Método para verificar o horário de funcionamento
  checkBusinessHours(): void {
    const now = new Date();
    const day = now.getDay(); // 0 - domingo, 1 - segunda-feira, ..., 6 - sábado
    const hours = now.getHours(); // Horas atuais

    // Horário de funcionamento: Seg a Dom - 18:00 às 22:00
    const openingHour = 18;
    const closingHour = 22;

    // Verifica se estamos dentro do horário de funcionamento
    this.isOpen = day >= 1 && day <= 7 && hours >= openingHour && hours < closingHour;
  }
  
}
