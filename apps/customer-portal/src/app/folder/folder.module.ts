import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslationModule } from '@shared-translation';
import { FolderPageRoutingModule } from './folder-routing.module';
import { FolderPage } from './folder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    TranslationModule
  ],
  declarations: [FolderPage],
})
export class FolderPageModule {}
