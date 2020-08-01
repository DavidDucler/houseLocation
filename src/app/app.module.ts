import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HouseService} from "./services/house.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {IonicStorageModule} from "@ionic/storage";
import {Geolocation} from "@ionic-native/geolocation/ngx";




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
      BrowserAnimationsModule,MaterialModule,ReactiveFormsModule,IonicStorageModule.forRoot(
      {
        name: '__houseDb1',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
      }
  ),],
  providers: [
    StatusBar,
    SplashScreen,
    HouseService,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
