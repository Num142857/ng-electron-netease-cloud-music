import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { SuggestComponent } from './suggest/suggest.component';
import { NavComponent } from './components/nav/nav.component';
@NgModule({
  declarations: [SuggestComponent, NavComponent],
  imports: [
    CommonModule,
    DiscoverRoutingModule
  ]
})
export class DiscoverModule { }
