import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GroupComponent } from './container/group/group.component';
import { IndexComponent } from './container/index/index.component';
import { LeftbarComponent } from './components/leftbar/leftbar.component';
import { GroupiconComponent } from './components/groupicon/groupicon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GroupComponent,
    IndexComponent,
    LeftbarComponent,
    GroupiconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
