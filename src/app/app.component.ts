import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, ThemeToggleComponent],
  template: `
    <app-nav-bar></app-nav-bar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-theme-toggle></app-theme-toggle>
  `,
  styles: [`
    main {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
      min-height: calc(100vh - 64px);
      background-color: var(--theme-background);
      color: var(--theme-text);
      transition: background-color 0.3s, color 0.3s;
    }
  `]
})
export class AppComponent {}