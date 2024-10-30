import { Routes } from '@angular/router';
import { ResearchComponent } from './pages/research/research.component';
import { HuntComponent } from './pages/hunt/hunt.component';

export const routes: Routes = [
  {
    path: 'research',
    component: ResearchComponent
  },
  {
    path: 'hunt',
    component: HuntComponent
  },
  {
    path: '',
    redirectTo: '/research',
    pathMatch: 'full'
  }
];