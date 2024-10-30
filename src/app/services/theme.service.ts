import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.darkMode.asObservable();
  
  constructor() {
    // Check if user has a theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.darkMode.next(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.darkMode.next(prefersDark);
    }
    
    this.applyTheme();
  }

  isDarkMode(): boolean {
    return this.darkMode.value;
  }

  toggleTheme(): void {
    this.darkMode.next(!this.darkMode.value);
    localStorage.setItem('theme', this.darkMode.value ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme(): void {
    const root = document.documentElement;
    if (this.darkMode.value) {
      root.style.setProperty('--theme-background', '#1a1a1a');
      root.style.setProperty('--theme-text', '#ffffff');
      root.style.setProperty('--theme-primary-color', '#424242');
      root.style.setProperty('--theme-primary-hover-color', '#616161');
      root.style.setProperty('--theme-primary-contrast', '#ffffff');
      document.body.classList.add('dark-mode');
    } else {
      root.style.setProperty('--theme-background', '#f5f5f5');
      root.style.setProperty('--theme-text', '#000000');
      root.style.setProperty('--theme-primary-color', '#ffffff');
      root.style.setProperty('--theme-primary-hover-color', '#f5f5f5');
      root.style.setProperty('--theme-primary-contrast', '#000000');
      document.body.classList.remove('dark-mode');
    }
  }
}