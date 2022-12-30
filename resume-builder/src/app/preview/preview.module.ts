import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview.component';
import { BrowserModule } from '@angular/platform-browser';
import { PreviewRoutingModule } from './preview-routing.module';



@NgModule({
  declarations: [
    PreviewComponent
  ],
  imports: [
    CommonModule,
    PreviewRoutingModule
  ]
})
export class PreviewModule { }
