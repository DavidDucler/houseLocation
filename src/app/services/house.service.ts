import { Injectable } from '@angular/core';
import {HouseModel} from "../pages/houses/house.model";
import { Storage } from '@ionic/storage';



@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private house: HouseModel [] = [
  ];

  constructor(private storage:Storage) {
  }

  getAllHouses() {
    return this.storage.get('houses').then(data =>{
      this.house = data !=null ? data : [];
      return this.house
    });
  }

 /* getHouse(agentName:string) {
    return {...this.house.find(house => {
        return house.agentName === agentName;
      })
    };
  }*/
  addHouse(house:HouseModel){
    this.house.push(house);
    this.storage.set('houses',this.house);
  }
}
