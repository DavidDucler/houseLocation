import { Component, OnInit } from '@angular/core';
import {HouseModel} from "../house.model";
import {HouseService} from "../../../services/house.service";

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.page.html',
  styleUrls: ['./house-detail.page.scss'],
})
export class HouseDetailPage implements OnInit {
  loadedHouse:HouseModel;
  constructor(private houseService:HouseService) { }

  ngOnInit() {
    this.loadedHouse=this.houseService.getHouse(this.loadedHouse.agentName);
  }

}
