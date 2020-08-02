import { Component, OnInit } from '@angular/core';
import {HouseModel} from "../houses/house.model";
import {ActivatedRoute} from "@angular/router";
import {PhotoService} from "../../services/photo.service";




@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.page.html',
  styleUrls: ['./house-detail.page.scss'],
})
export class HouseDetailPage implements OnInit {
house:HouseModel;photos = this.photoService.photos;
  constructor(private activatedRoute:ActivatedRoute,private photoService:PhotoService
             ) {}

  ngOnInit() {
    /*this.activatedRoute.params.subscribe(paramMap => {
      if (!paramMap.has('agentName')){
        // redirection
        this.router.navigate(['/accueil/houses']);
        return;
      }
      this.id = paramMap['id'];
    });*/
      this.photoService.loadSaved();
   this.activatedRoute.queryParams.subscribe(params => {
      this.house = JSON.parse(params["house"]);
      console.log(this.house);
    });

  }

}
