import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconsModule } from '@progress/kendo-angular-icons';
import { SVGIcon, chevronRightIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule, IconsModule],
  template: `
    <div class="breadcrumb">
      <a routerLink="/" class="breadcrumb-item">Home</a>
      <span class="k-icon k-i-arrow-chevron-right"></span>
      <span class="breadcrumb-item">Current Page</span>
    </div>
  `,
  styles: [`
    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background-color: #2a2a2a;
    }
    .breadcrumb-item {
      color: white;
      text-decoration: none;
    }
    .k-icon {
      color: white;
      font-size: 12px;
    }
  `]
})
export class BreadcrumbComponent {}