import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { SuggestComponent } from './suggest/suggest.component';
import { NavComponent } from './components/nav/nav.component';
import { DiscoverComponent } from './discover.component';
import { PanelTitleComponent } from './components/panel-title/panel-title.component';
import { PanelItemComponent } from './components/panel-item/panel-item.component';
@NgModule({
  declarations: [SuggestComponent, NavComponent, DiscoverComponent, PanelTitleComponent, PanelItemComponent],
  imports: [
    CommonModule,
    DiscoverRoutingModule
  ]
})
export class DiscoverModule { }
