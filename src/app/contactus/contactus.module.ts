import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactusComponent } from './contactus.component';
@NgModule({
  declarations: [
    ContactusComponent,

  ],
  imports: [
    ContactusRoutingModule,
    CommonModule,
  ]
})
export class ContactusModule { }
