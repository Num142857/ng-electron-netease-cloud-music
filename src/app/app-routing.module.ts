import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'discover/suggest',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'discover',
        loadChildren: './pages/discover/discover.module#DiscoverModule'
      },
      // {
      //   path: 'personal-fm',
      //   component: PersonalFmComponent
      // },
      // {
      //   path: 'mv',
      //   loadChildren: './pages/mv/mv.module#MvModule'
      // },
      // {
      //   path: 'friends',
      //   component: FriendsComponent
      // },
      // {
      //   path: 'song-sheet/:id',
      //   component: SongSheetComponent
      // },
      // {
      //   path: 'my-music',
      //   component: MyMusicComponent
      // },
      // {
      //   path: 'system-setting',
      //   component: SystemSettingComponent
      // },
      // {
      //   path: 'user-setting',
      //   component: UserSettingComponent
      // }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
