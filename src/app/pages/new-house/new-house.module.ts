import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewHousePageRoutingModule } from './new-house-routing.module';

import { NewHousePage } from './new-house.page';
import {MaterialModule} from "../../material.module";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewHousePageRoutingModule,
        MaterialModule,
        MatDividerModule
    ],
  declarations: [NewHousePage]
})
export class NewHousePageModule {}
