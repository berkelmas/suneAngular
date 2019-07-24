import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { TurkishappRouting } from './turkishappmodule-routing.module';

import { TurkishappmoduleComponent } from './turkishappmodule.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';

import { UrgentcausesComponent } from './urgentcauses/urgentcauses.component';
import { DifferencemakingComponent } from './differencemaking/differencemaking.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';


import { convertHtmlToText } from './convertHTMLToText.pipe';

@NgModule({
  imports: [
    CommonModule,
    TurkishappRouting,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    TurkishappmoduleComponent,
    NavbarComponent,
    SliderComponent,
    UrgentcausesComponent,
    DifferencemakingComponent,
    MainpageComponent,
    ErrorpageComponent,

    convertHtmlToText,
  ],
})
export class TurkishappmoduleModule { }
