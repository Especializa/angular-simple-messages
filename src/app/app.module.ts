import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewMessagesModule } from './new-messages/new-messages.module';
import { MessagesService } from 'app/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NewMessagesModule,
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
