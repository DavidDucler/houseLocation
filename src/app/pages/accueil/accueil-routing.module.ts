import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilPage } from './accueil.page';

// @ts-ignore
const routes: Routes = [
  {
    path: 'accueil',
    component: AccueilPage,
    children :[
      {
        path :'houses',
        loadChildren: () => import('../houses/houses.module').then( m => m.HousesPageModule)
      },
      {
        path :'logout',
        loadChildren: () => import('../logout/logout.module').then( m => m.LogoutPageModule)
      },
      {
        path: 'new-house',
        loadChildren: () => import('../new-house/new-house.module').then( m => m.NewHousePageModule)
      },

    ],
  },
  {
    path :'',
    redirectTo :'/accueil/houses'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilPageRoutingModule {}
