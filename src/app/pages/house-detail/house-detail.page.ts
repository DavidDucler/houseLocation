import { Component, OnInit } from '@angular/core';
import {HouseModel} from "../houses/house.model";
import {ActivatedRoute, Router} from "@angular/router";
import {HouseService} from "../../services/house.service";




@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.page.html',
  styleUrls: ['./house-detail.page.scss'],
})
export class HouseDetailPage implements OnInit {
house:HouseModel;
  constructor(private activatedRoute:ActivatedRoute,private router: Router,
              private houseService: HouseService) {}

  ngOnInit() {
    /*this.activatedRoute.params.subscribe(paramMap => {
      if (!paramMap.has('agentName')){
        // redirection
        this.router.navigate(['/accueil/houses']);
        return;
      }
      this.id = paramMap['id'];
    });*/
   this.activatedRoute.queryParams.subscribe(params => {
      this.house = JSON.parse(params["house"]);
     console.log(this.house.agentName);
    });
  }

}
