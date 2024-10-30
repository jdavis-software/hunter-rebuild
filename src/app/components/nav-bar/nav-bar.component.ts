import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconsModule } from '@progress/kendo-angular-icons';
import { DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { SVGIcon, userIcon, gearIcon, logoutIcon, searchIcon, binocularsIcon, envelopeIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, IconsModule, DropDownButtonModule],
  template: `
    <nav class="nav-container">
      <div class="nav-left">
        <h1 class="logo">App Logo</h1>
      </div>
      <div class="nav-center">
        <a routerLink="/research" routerLinkActive="active" class="nav-link">
          <kendo-svg-icon [icon]="searchIcon" class="nav-icon"></kendo-svg-icon>
          Research
        </a>
        <a routerLink="/hunt" routerLinkActive="active" class="nav-link">
          <kendo-svg-icon [icon]="binocularsIcon" class="nav-icon"></kendo-svg-icon>
          Hunt
        </a>
      </div>
      <div class="nav-right">
        <kendo-dropdownbutton
          [data]="menuItems"
          [svgIcon]="userIcon"
          (itemClick)="onItemClick($event)"
          class="user-menu"
        >
          User Menu
        </kendo-dropdownbutton>
      </div>
    </nav>
  `,
  styles: [`
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #1a1a1a;
      color: white;
    }
    .nav-left, .nav-center, .nav-right {
      display: flex;
      align-items: center;
    }
    .logo {
      margin: 0;
      font-size: 1.5rem;
      color: white;
    }
    .nav-link {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      margin: 0 0.5rem;
      border-radius: 4px;
      transition: background-color 0.2s;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .nav-link:hover {
      background-color: rgba(255,255,255,0.1);
    }
    .nav-link.active {
      background-color: rgba(255,255,255,0.2);
    }
    .nav-icon {
      width: 16px;
      height: 16px;
      color: currentColor;
    }
    :host ::ng-deep .user-menu .k-button {
      background-color: transparent;
      border-color: rgba(255,255,255,0.3);
      color: white;
    }
    :host ::ng-deep .user-menu .k-button:hover {
      background-color: rgba(255,255,255,0.1);
      border-color: rgba(255,255,255,0.5);
    }
  `]
})
export class NavBarComponent {
  searchIcon = searchIcon;
  binocularsIcon = binocularsIcon;
  userIcon = userIcon;
  
  menuItems = [
    {
      text: 'Settings',
      svgIcon: gearIcon,
      id: 'settings'
    },
    {
      text: 'Contact',
      svgIcon: envelopeIcon,
      id: 'contact'
    },
    {
      text: 'Logout',
      svgIcon: logoutIcon,
      id: 'logout'
    }
  ];

  onItemClick(event: any): void {
    switch (event.item.id) {
      case 'settings':
        console.log('Settings clicked');
        break;
      case 'contact':
        console.log('Contact clicked');
        break;
      case 'logout':
        console.log('Logout clicked');
        break;
    }
  }
}