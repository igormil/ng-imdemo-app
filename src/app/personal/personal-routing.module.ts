import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {MyProjectsComponent} from "./my-projects/my-projects.component";
import {PersonalComponent} from "./personal.component";
import {MyInterestsComponent} from "./my-interests/my-interests.component";
import {MyInterestDetailComponent} from "./my-interest-detail/my-interest-detail.component";

const personalRoutes: Routes = [
  { path: '',
    component: PersonalComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'about-me', component: AboutMeComponent},
      {path: 'my-projects', component: MyProjectsComponent},
      {path: 'my-interests', component: MyInterestsComponent},
      {path: 'my-interests/:id', component: MyInterestDetailComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(personalRoutes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
