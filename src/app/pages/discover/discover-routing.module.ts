import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SuggestComponent} from './suggest/suggest.component';
import { DiscoverComponent } from './discover.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
const routes: Routes = [
  {
    path: '',
    component: DiscoverComponent,
    children: [
      {
      path: 'suggest',
      component: SuggestComponent,
    },
      {
      path: 'leaderboard',
      component: LeaderboardComponent,
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DiscoverRoutingModule { }
