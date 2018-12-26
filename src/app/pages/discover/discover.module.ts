import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { SuggestComponent } from './suggest/suggest.component';
import { NavComponent } from './components/nav/nav.component';
import { DiscoverComponent } from './discover.component';
import { PanelTitleComponent } from './components/panel-title/panel-title.component';
import { PanelItemComponent } from './components/panel-item/panel-item.component';
import { IndividuationComponent } from './components/individuation/individuation.component';
import { NewSongComponent } from './components/new-song/new-song.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
@NgModule({
  declarations: [SuggestComponent, NavComponent,
    DiscoverComponent, PanelTitleComponent, PanelItemComponent, IndividuationComponent, NewSongComponent, LeaderboardComponent],
  imports: [
    CommonModule,
    DiscoverRoutingModule
  ]
})
export class DiscoverModule { }
