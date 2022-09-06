import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PS1Component } from './ps1/ps1.component';
import { Ps7Component } from './ps7/ps7.component';
import { Ps4Component } from './ps4/ps4.component';
import { Ps8Component } from './ps8/ps8.component';
import { Ps5Component } from './ps5/ps5.component';
import { Ps9Component } from './ps9/ps9.component';
import { Ps6Component } from './ps6/ps6.component';
import { DescsortpipePipe } from './descpipe.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    PS1Component,
    Ps7Component,
    Ps4Component,
    Ps8Component,
    Ps5Component,
    Ps9Component,
    Ps6Component,
    DescsortpipePipe,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
