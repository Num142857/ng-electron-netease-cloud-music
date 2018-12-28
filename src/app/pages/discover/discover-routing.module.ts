import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SuggestComponent} from './suggest/suggest.component';
import { DiscoverComponent } from './discover.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { OfficialComponent } from './leaderboard/official/official.component';
import { GlobalComponent } from './leaderboard/global/global.component';


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
      // redirectTo: 'discover/suggest/leaderboard/official',
      // pathMatch: 'full',
      component: LeaderboardComponent,
      children: [
          {
            path: 'official',
            component: OfficialComponent,
          },
          {
            path: 'global',
            component: GlobalComponent,
          },
      ]
    },
      // {
  //   path: 'suggest/leaderboard',
  //   redirectTo: 'discover/suggest/leaderboard/official',
  //   // pathMatch: 'full',
  // },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DiscoverRoutingModule { }
