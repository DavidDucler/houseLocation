import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetailPageRoutingModule } from './house-detail-routing.module';

import { HouseDetailPage } from './house-detail.page';
import {MaterialModule} from "../../material.module";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HouseDetailPageRoutingModule,
        MaterialModule,
        MatDividerModule,
    ],
  declarations: [HouseDetailPage]
})
export class HouseDetailPageModule {}
