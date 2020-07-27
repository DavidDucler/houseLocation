import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {HouseModel} from './house.model';
import {HouseService} from '../../services/house.service';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-houses',
  templateUrl: './houses.page.html',
  styleUrls: ['./houses.page.scss'],
})
export class HousesPage implements OnInit {
houses: Array <HouseModel>;
house:HouseModel;
  constructor(private router: Router,
              private houseService: HouseService,
              private navController: NavController) { }

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
        house: JSON.stringify(house),
      }
    };
    this.navController.navigateForward('/accueil/house-detail',navigationExtras)
     //this.router.navigate(['/accueil/house-detail',house]);
    }
}
