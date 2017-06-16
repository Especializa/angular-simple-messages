import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesAreaComponent } from './messages-area/messages-area.component';
import { DistanceToNowPipe } from './distance-to-now.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MessagesAreaComponent, DistanceToNowPipe],
  exports: [MessagesAreaComponent, DistanceToNowPipe]
})
export class SharedModule { }
