import { Component, OnInit } from '@angular/core';
import {Router, RouterEvent} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  pages = [
    {
      title :'Maisons à Louer',
      url : '/accueil/houses',
    },
    {
      title :'Se deconnecter',
      url : '/accueil/logout',
    },
  ];
      SelectedPath = '';
  constructor(private router : Router) {
    this.router.events.subscribe((event:RouterEvent) =>{
      this.SelectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}
