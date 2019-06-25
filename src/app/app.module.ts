import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';

import { RecentcausesComponent } from './recentcauses/recentcauses.component';
import { UrgentcausesComponent } from './urgentcauses/urgentcauses.component';
import { DifferencemakingComponent } from './differencemaking/differencemaking.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ContactuspageComponent } from './contactuspage/contactuspage.component';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    RecentcausesComponent,
    UrgentcausesComponent,
    DifferencemakingComponent,
    MainpageComponent,
    AboutpageComponent,
    ErrorpageComponent,
    ContactuspageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: "suneAngular"}),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LazyLoadImageModule
  ],
  providers: [
    {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig
    },
    Title,
    Meta
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
