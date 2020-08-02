import { Component, OnInit } from '@angular/core';
import {HouseModel} from "../houses/house.model";
import {HouseService} from "../../services/house.service";
import {Router} from "@angular/router";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {FormBuilder,FormGroup,ValidatorFn,Validators} from "@angular/forms";
import {PhotoService} from "../../services/photo.service";

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
    {type: 'Agent immobilier', viewType: 'Agent immobilier'},
    {type: 'Particulier', viewType: 'Particulier'},
  ];
  houseTy : House[]= [
    {typeHouse:'Appartement',viewTypeHouse:'Appartement'},
    {typeHouse:'Studio moderne',viewTypeHouse:'Studio Moderne'},
    {typeHouse:'Chambre moderne',viewTypeHouse:'Chambre Moderne'},
    {typeHouse:'villa',viewTypeHouse:'Villa'},

  ]


      constructor(private houseService:HouseService,
                  private router:Router,
                 private geolocation:Geolocation,
                  private fb:FormBuilder,
                  private photoService:PhotoService) { }
                  myForm:FormGroup;
                  house:HouseModel;
                  photos=this.photoService.photos;
  ngOnInit() {
    this.myForm = this.fb.group({
        agent:'',
        agentName:'',
        houseType: '',
        monthlyPrice:'',
        houseCity: '',
        numberOfRooms: '',
        numberOfLiveRooms: '',
        numberOfShowers : '',
        numberOfKitchen :'',
        numberOfDiningRoom : '',
        numberOfTerrace:'',
        houseDescription:'',

    });
    this.myForm.valueChanges.subscribe(console.log);
    this.photoService.addNewToGallery();
  }

    onAddHouse(house:HouseModel) {
     this.houseService.addHouse(house);
     this.router.navigate(['/accueil/houses']);
     house.location={longitude:0,latitude:0};
     this.geolocation.getCurrentPosition().then((resp) => {
       house.location.longitude  = resp.coords.latitude;
       house.location.latitude = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error)
     });
     console.log(house.location.longitude);
  }

    addPhotoToGallery() {
       this.photoService.addNewToGallery();
    }
}
