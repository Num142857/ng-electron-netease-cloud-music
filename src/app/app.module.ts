import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { DefaultComponent } from './layouts/default/default.component';
import { SideComponent } from './components/side/side.component';
import { PlayerComponent } from './components/player/player.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    DefaultComponent,
    SideComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
