import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SuggestComponent} from './suggest/suggest.component';
import { DiscoverComponent } from './discover.component';
const routes: Routes = [
  {
    path: '',
    component: DiscoverComponent,
    children: [{
      path: 'suggest',
      component: SuggestComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DiscoverRoutingModule { }
