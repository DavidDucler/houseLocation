import { Component, OnInit } from '@angular/core';
import {HouseModel} from "../houses/house.model";
import {HouseService} from "../../services/house.service";
import {Router} from "@angular/router";
import { Geolocation } from '@ionic-native/geolocation/ngx';

interface Enterprise {
  type:string;
  viewType:string
}
interface House {
  typeHouse:string,
  viewTypeHouse:string
}

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.page.html',
  styleUrls: ['./new-house.page.scss'],
})
export class NewHousePage implements OnInit {
  enterprise: Enterprise[]=[
    {type: 'immobilier', viewType: 'Agent immobilier'},
    {type: 'particulier', viewType: 'Particulier'},
  ];
  house : House[]= [
    {typeHouse:'appart',viewTypeHouse:'Appartement'},
    {typeHouse:'studio',viewTypeHouse:'Studio Moderne'},
    {typeHouse:'chambre',viewTypeHouse:'Chambre Moderne'},
    {typeHouse:'villa',viewTypeHouse:'Villa'},

  ]
  kitchen: '';
  shower: '';
  diningRoom: '';
  terrace: '';
  room: '';
  liveRoom: '';

      constructor(private houseService:HouseService,
                  private router:Router,
                 private geolocation:Geolocation) { }

  ngOnInit() {
  }

   async onAddHouse(house:HouseModel) {
    house.location={longitude:0,latitude:0};
    this.geolocation.getCurrentPosition().then((resp) => {
      house.location.longitude  = resp.coords.latitude;
      house.location.latitude = resp.coords.longitude;
      this.houseService.addHouse(house)
      this.router.navigate(['/accueil/houses'])
    }).catch((error) => {
      console.log('Error getting location', error)
      this.houseService.addHouse(house)
      this.router.navigate(['/accueil/houses'])
    });
    console.log(house.location.longitude);

  }
}
