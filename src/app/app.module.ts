import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import {BffService} from './bff.service'
import {WINDOW_PROVIDERS} from './WindowProvider'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UpdateUserComponent,
    ShowUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BffService,WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
