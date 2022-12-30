import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview.component';
import { MatIconModule } from '@angular/material/icon';
import { PreviewRoutingModule } from './preview-routing.module';



@NgModule({
  declarations: [
    PreviewComponent
  ],
  imports: [
    CommonModule,
    PreviewRoutingModule,
    MatIconModule
  ]
})
export class PreviewModule { }
