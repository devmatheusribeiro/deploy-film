import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from 'src/app/shared/icons/icons.module';
import { FooterComponent } from './footer.component';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
