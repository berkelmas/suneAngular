import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

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
import { TarihcepageComponent } from './tarihcepage/tarihcepage.component';
import { GonullulerimizpageComponent } from './gonullulerimizpage/gonullulerimizpage.component';
import { GonulluolunpageComponent } from './gonulluolunpage/gonulluolunpage.component';
import { ProjelerpageComponent } from './projelerpage/projelerpage.component';
import { DuyurularpageComponent } from './duyurularpage/duyurularpage.component';
import { AtolyelerpageComponent } from './atolyelerpage/atolyelerpage.component';
import { BurslarpageComponent } from './burslarpage/burslarpage.component';
import { ProjedetaypageComponent } from './projedetaypage/projedetaypage.component';
import { BursdetaypageComponent } from './bursdetaypage/bursdetaypage.component';

import { convertHtmlToText } from './convertHTMLToText.pipe';

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
    ContactuspageComponent,
    TarihcepageComponent,
    GonullulerimizpageComponent,
    GonulluolunpageComponent,
    ProjelerpageComponent,
    DuyurularpageComponent,
    AtolyelerpageComponent,
    BurslarpageComponent,
    ProjedetaypageComponent,
    BursdetaypageComponent,

    convertHtmlToText,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: "suneAngular"}),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
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
