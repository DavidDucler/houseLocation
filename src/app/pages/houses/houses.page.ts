import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HouseModel} from './house.model';
import {HouseService} from '../../services/house.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.page.html',
  styleUrls: ['./houses.page.scss'],
})
export class HousesPage implements OnInit {
houses: Array <HouseModel>;
  constructor(private router: Router,
              private houseService: HouseService) { }

  ngOnInit() {
    this.houseService.getAllHouses().then( data => {
      this.houses = data;
    });
  }

  onNewHouse() {
    this.router.navigate(['/accueil/new-house']);
  }

    /*houseDetail() {
    console.log('navigate to house detail');
    this.router.navigate(['/houses/house-detail']);
    }*/
}
