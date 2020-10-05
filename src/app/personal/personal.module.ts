import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';

import {MatListModule} from "@angular/material/list";

import { PersonalComponent } from './personal.component'
import { HomeComponent } from './home/home.component'
import { AboutMeComponent } from './about-me/about-me.component'
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyInterestsComponent } from './my-interests/my-interests.component';
import { MyInterestDetailComponent } from './my-interest-detail/my-interest-detail.component'

@NgModule({
  declarations: [
    PersonalComponent,
    HomeComponent,
    AboutMeComponent,
    MyProjectsComponent,
    MyInterestsComponent,
    MyInterestDetailComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    MatListModule,
  ]
})
export class PersonalModule { }
