import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { SuggestComponent } from './suggest/suggest.component';

@NgModule({
  declarations: [SuggestComponent],
  imports: [
    CommonModule,
    DiscoverRoutingModule
  ]
})
export class DiscoverModule { }
