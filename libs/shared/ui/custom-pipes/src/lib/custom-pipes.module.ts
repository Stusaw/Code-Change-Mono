import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SafePipe } from './safe/safe.pipe';
import { SpacifyWordsPipe } from './spacify-words/spacify-words';

@NgModule({
  imports: [CommonModule],
  declarations: [SpacifyWordsPipe, SafePipe],
  exports: [SpacifyWordsPipe, SafePipe],
})
export class CustomPipesModule {}
