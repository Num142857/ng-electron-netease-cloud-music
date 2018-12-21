import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { SuggestComponent } from './suggest/suggest.component';
import { NavComponent } from './components/nav/nav.component';
import { DiscoverComponent } from './discover.component';
import { PanelTitleComponent } from './components/panel-title/panel-title.component';
@NgModule({
  declarations: [SuggestComponent, NavComponent, DiscoverComponent, PanelTitleComponent],
  imports: [
    CommonModule,
    DiscoverRoutingModule
  ]
})
export class DiscoverModule { }
