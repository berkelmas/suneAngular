import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { TarihcepageComponent } from './tarihcepage/tarihcepage.component';

import { ProjelerpageComponent } from './projelerpage/projelerpage.component';
import { ProjedetaypageComponent } from './projedetaypage/projedetaypage.component';

import { DuyurularpageComponent } from './duyurularpage/duyurularpage.component';

import { BurslarpageComponent } from './burslarpage/burslarpage.component';
import { BursdetaypageComponent } from './bursdetaypage/bursdetaypage.component';

import { AtolyelerpageComponent } from './atolyelerpage/atolyelerpage.component';

import { GonullulerimizpageComponent } from './gonullulerimizpage/gonullulerimizpage.component';
import { GonulluolunpageComponent } from './gonulluolunpage/gonulluolunpage.component';
import { ContactuspageComponent } from './contactuspage/contactuspage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainpageComponent},
  {path: 'hakkimizda', component: AboutpageComponent},
  {path: 'tarihce', component: TarihcepageComponent},

  {path: 'projeler/:page', component: ProjelerpageComponent},
  {path: 'proje/:id/:projeslug', component: ProjedetaypageComponent},

  {path: 'duyurular', component: DuyurularpageComponent},

  {path: 'burslar', component: BurslarpageComponent},
  {path: 'burs/:id/:bursslug', component: BursdetaypageComponent},

  {path: 'atolyeler', component: AtolyelerpageComponent},

  {path: 'gonullulerimiz', component: GonullulerimizpageComponent},
  {path: 'gonullu-olun', component: GonulluolunpageComponent},
  {path: 'bize-ulasin', component: ContactuspageComponent},
  { path: '**', component: ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
