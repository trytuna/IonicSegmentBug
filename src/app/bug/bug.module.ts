import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BugPageRoutingModule } from './bug-routing.module';

import { BugPage } from './bug.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BugPageRoutingModule
  ],
  declarations: [BugPage]
})
export class BugPageModule {}
