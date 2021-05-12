import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule],
  exports: [FlexLayoutModule, MatCardModule, MatInputModule, MatButtonModule],
})
export class UiMaterialDesignModule {}
