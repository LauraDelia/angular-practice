import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { OneComponent } from './components/one/one.component';

import { UserService } from "./services/user.service";

import { routing } from './app.routing';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    OneComponent,
    PhonePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
