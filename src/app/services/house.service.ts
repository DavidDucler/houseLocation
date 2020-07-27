import { Injectable } from '@angular/core';
import {HouseModel} from "../pages/houses/house.model";
import { Storage } from '@ionic/storage';
import {NavParams} from "@ionic/angular";


@Injectable({
  providedIn: 'root'
})
export class HouseService {
  houseM:HouseModel;
  private house: HouseModel [] = [
    {
      agentName: 'Mr Hamadou',
      agent: 'Immobilier SA Cameroon',
      houseType: 'Appartement',
      monthlyPrice: 120000,
      houseDetail: {
        numberOfRooms: 3,
        numberOfLiveRooms: 2,
        numberOfShowers: 2,
        numberOfKitchen: 2,
        numberOfDiningRoom: 1,
        numberOfTerrace: 2,
      },
      houseDescription: 'Founded in 1829 on an isthmus' +
          ' between Lake Monona and Lake Mendota,' +
          ' Madison was named the capital of the Wisconsin Territory in 1836.',
      houseCity: 'Douala',
      location: {
        longitude: 23,
        latitude: 40,
      }
    },
    {
      agentName: 'Mr Hamadou',
      agent: 'Immobilier SA Cameroon',
      houseType: 'Appartement',
      monthlyPrice: 80000,
      houseDetail: {
        numberOfRooms: 3,
        numberOfLiveRooms: 2,
        numberOfShowers: 2,
        numberOfKitchen: 2,
        numberOfDiningRoom: 1,
        numberOfTerrace: 2,
      },
      houseDescription: 'Founded in 1829 on an isthmus between' +
          '' + ' Lake Monona and Lake Mendota, Madison was named ' +
          'the capital of the Wisconsin Territory in 1836.',
      houseCity: 'Yaoundé',
      location: {
        longitude: 23,
        latitude: 40,
      }
    },
    {
      agentName: 'Mr Hamadou',
      agent: 'Immobilier SA Cameroon',
      houseType: 'Studio Moderne',
      monthlyPrice: 20000,
      houseDetail: {
        numberOfRooms: 3,
        numberOfLiveRooms: 2,
        numberOfShowers: 2,
        numberOfKitchen: 2,
        numberOfDiningRoom: 1,
        numberOfTerrace: 2,
      },
      houseDescription: 'Founded in 1829 on an isthmus between' +
          '' + ' Lake Monona and Lake Mendota, Madison was named ' +
          'the capital of the Wisconsin Territory in 1836.',
      houseCity: 'Douala',
      location: {
        longitude: 23,
        latitude: 40,
      }
    }
  ];

  constructor(private storage:Storage) {
  }

  getAllHouses() {
    return this.storage.get('houses').then(data =>{
      this.house = data !=null ? data : [];
      return this.house
    });
  }

  getHouse(agentName:string) {
    return {...this.house.find(house => {
        return house.agentName === agentName;
      })
    };
  }
  addHouse(house:HouseModel){
    this.house.push(house);
    this.storage.set('houses',this.house);
  }
}
