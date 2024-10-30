import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '@progress/kendo-angular-icons';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ThemeService } from '../../services/theme.service';
import { brightnessContrastIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, IconsModule, ButtonsModule],
  template: `
    <button
      kendoButton
      [fillMode]="'flat'"
      (click)="toggleTheme()"
      class="theme-toggle"
      [class.dark]="isDark"
    >
      <kendo-svg-icon [icon]="brightnessContrastIcon"></kendo-svg-icon>
    </button>
  `,
  styles: [`
    .theme-toggle {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      background-color: var(--theme-primary-color);
      color: var(--theme-primary-contrast);
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      transition: all 0.3s ease;
    }

    .theme-toggle:hover {
      background-color: var(--theme-primary-hover-color);
      transform: scale(1.05);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }

    .theme-toggle.dark {
      background-color: #90caf9;
      color: #000000;
    }

    .theme-toggle.dark:hover {
      background-color: #42a5f5;
    }

    :host ::ng-deep kendo-svg-icon {
      width: 24px;
      height: 24px;
    }
  `]
})
export class ThemeToggleComponent implements OnInit {
  brightnessContrastIcon = brightnessContrastIcon;
  isDark = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDark = this.themeService.isDarkMode();
    this.themeService.isDarkMode$.subscribe(
      isDark => this.isDark = isDark
    );
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}