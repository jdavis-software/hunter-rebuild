import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="research-container">
      <h1>Research</h1>
      <div class="content">
        <p>Research component content goes here.</p>
      </div>
    </div>
  `,
  styles: [`
    .research-container {
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
export class ResearchComponent {}