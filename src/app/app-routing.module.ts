import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component'
import { HomeComponent } from './home/home.component'
import { AboutMeComponent } from './about-me/about-me.component'
import { MyProjectsComponent } from './my-projects/my-projects.component'
import { PersonalComponent } from './personal/personal.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'personal',
    component: PersonalComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'about-me', component: AboutMeComponent},
      {path: 'my-projects', component: MyProjectsComponent},
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component:  PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
