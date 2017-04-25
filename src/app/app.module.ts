import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewMessageModule } from './new-message/new-message.module';
import { OldMessagesModule } from './old-messages/old-messages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NewMessageModule,
    OldMessagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
