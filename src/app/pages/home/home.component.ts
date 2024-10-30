import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <h1>Welcome to Angular</h1>
      <p>Your application is running successfully!</p>
    </div>
  `,
  styles: [`
    .home-container {
      text-align: center;
      padding: 2rem;
    }
    h1 {
      color: #3f51b5;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      color: #666;
    }
  `]
})
export class HomeComponent {}