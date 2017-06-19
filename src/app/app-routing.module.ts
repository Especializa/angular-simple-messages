import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMessagesComponent } from './new-messages/new-messages.component';
import { OldMessagesComponent } from './old-messages/old-messages.component';

const routes: Routes = [
  { path: '', redirectTo: '/new-messages', pathMatch: 'full' },
  { path: 'new-messages', component: NewMessagesComponent },
  { path: 'old-messages', component: OldMessagesComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/new-messages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
