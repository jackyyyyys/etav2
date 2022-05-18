import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopComponent } from './stop/stop.component';
import { MainComponent } from './main/main.component';
import { RouteComponent } from './route/route.component';

@NgModule({
  declarations: [
    AppComponent,
    StopComponent,
    MainComponent,
    RouteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
