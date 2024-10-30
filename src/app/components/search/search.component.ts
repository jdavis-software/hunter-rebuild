import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { IconsModule } from '@progress/kendo-angular-icons';
import { searchIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, InputsModule, IconsModule],
  template: `
    <div class="search-section">
      <div class="search-wrapper">
        <kendo-textbox
          placeholder="Search"
          [clearButton]="true"
          [(ngModel)]="searchQuery"
          class="search-input">
          <ng-template kendoTextBoxPrefixTemplate>
            <kendo-svg-icon [icon]="searchIcon" class="search-icon"></kendo-svg-icon>
          </ng-template>
        </kendo-textbox>
      </div>
    </div>
  `,
  styles: [`
    .search-section {
      padding: 2rem 0;
      background-color: white;
      border-bottom: 1px solid #e0e0e0;
    }

    .search-wrapper {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .search-input {
      width: 100%;
      font-size: 1.1rem;

      ::ng-deep .k-input-inner {
        padding: 1rem 1rem 1rem 3rem;
        height: 3rem;
      }

      ::ng-deep .k-input-prefix {
        left: 1rem;
      }
    }

    .search-icon {
      color: #666;
    }
  `]
})
export class SearchComponent {
  searchIcon = searchIcon;
  searchQuery = '';
}