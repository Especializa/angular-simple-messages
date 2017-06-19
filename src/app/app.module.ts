import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewMessagesModule } from './new-messages/new-messages.module';
import { OldMessagesModule } from './old-messages/old-messages.module';
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
    OldMessagesModule,
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
