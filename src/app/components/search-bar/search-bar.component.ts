import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { IconsModule } from '@progress/kendo-angular-icons';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, InputsModule, IconsModule],
  template: `
    <div class="search-container">
      <kendo-textbox
        placeholder="Search"
        [clearButton]="true"
        [(ngModel)]="searchText"
        class="search-input"
      >
        <ng-template kendoTextBoxPrefixTemplate>
          <span class="k-icon k-i-search"></span>
        </ng-template>
      </kendo-textbox>
    </div>
  `,
  styles: [`
    .search-container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 0 1rem;
    }
    .search-input {
      width: 100%;
    }
    .search-input ::ng-deep .k-input-inner {
      height: 48px;
      font-size: 16px;
    }
    .k-icon {
      font-size: 20px;
      color: #666;
    }
  `]
})
export class SearchBarComponent {
  searchText = '';
}