import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ResearchComponent } from './pages/research/research.component';
import { HuntComponent } from './pages/hunt/hunt.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BreadcrumbComponent,
    ThemeToggleComponent,
    SearchBarComponent,
    ResearchComponent,
    HuntComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    IconsModule,
    InputsModule,
    NavigationModule,
    DropDownsModule,
    RouterModule.forRoot([
      { path: 'research', component: ResearchComponent },
      { path: 'hunt', component: HuntComponent },
      { path: '', redirectTo: '/research', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }