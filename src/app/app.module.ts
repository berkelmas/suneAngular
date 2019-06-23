import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';

import { RecentcausesComponent } from './recentcauses/recentcauses.component';
import { UrgentcausesComponent } from './urgentcauses/urgentcauses.component';
import { DifferencemakingComponent } from './differencemaking/differencemaking.component';

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
    DifferencemakingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: "suneAngular"}),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
