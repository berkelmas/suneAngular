import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurkishappmoduleComponent } from './turkishappmodule.component';
import { MainpageComponent } from './mainpage/mainpage.component';

import { ErrorpageComponent } from './errorpage/errorpage.component';


const routes: Routes = [
  {path: '', component: TurkishappmoduleComponent, children: [
    {path: '', pathMatch: 'full', component: MainpageComponent},
    {path: '', loadChildren: () => import('./latemodule/latemodule.module').then(mod => mod.LateModule)},
    { path: '**', component: ErrorpageComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurkishappRouting { }
