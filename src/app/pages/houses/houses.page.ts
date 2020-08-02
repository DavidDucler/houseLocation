import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {HouseModel} from './house.model';
import {HouseService} from '../../services/house.service';
import {NavController} from "@ionic/angular";
import {PhotoService} from "../../services/photo.service";

@Component({
  selector: 'app-houses',
  templateUrl: './houses.page.html',
  styleUrls: ['./houses.page.scss'],
})
export class HousesPage implements OnInit {
houses: Array <HouseModel>;
house:HouseModel;
    isActive: false;
  constructor(private router: Router,
              private houseService: HouseService,
              private navController: NavController,
              private photoService:PhotoService) { }

  ngOnInit() {
    this.houseService.getAllHouses().then( data => {
      this.houses = data;
    });
  }

  onNewHouse() {
    this.router.navigate(['/accueil/new-house']);
  }
  houseDetail(house:HouseModel) {
   let navigationExtras: NavigationExtras = {
      queryParams: {
        house: JSON.stringify(house)
      }
    };
   console.log(house);
    this.navController.navigateForward('/accueil/house-detail',navigationExtras)
     //this.router.navigate(['/accueil/house-detail',house]);
    }
}
