import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SuggestComponent} from './suggest/suggest.component';
const routes: Routes = [
  {
    path: 'suggest',
    component: SuggestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DiscoverRoutingModule { }
