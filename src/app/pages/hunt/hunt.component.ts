import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hunt',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hunt-container">
      <h1>Hunt</h1>
      <div class="content">
        <p>Hunt component content goes here.</p>
      </div>
    </div>
  `,
  styles: [`
    .hunt-container {
      padding: 1rem;
    }
    .content {
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      color: #333;
      margin-bottom: 1rem;
    }
  `]
})
export class HuntComponent {}