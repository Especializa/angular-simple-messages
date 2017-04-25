import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMessageComponent } from './new-message/new-message.component';
import { OldMessagesComponent } from './old-messages/old-messages.component';

const routes: Routes = [
  {
    path: '',
    component: NewMessageComponent,
  },
  {
    path: 'old-messages',
    component: OldMessagesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
