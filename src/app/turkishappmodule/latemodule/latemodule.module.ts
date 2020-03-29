import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LatemoduleRouting } from "./latemodule-routing.module";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AboutpageComponent } from "./aboutpage/aboutpage.component";
import { TarihcepageComponent } from "./tarihcepage/tarihcepage.component";

import { ProjelerpageComponent } from "./projelerpage/projelerpage.component";
import { ProjedetaypageComponent } from "./projedetaypage/projedetaypage.component";

import { DuyurularpageComponent } from "./duyurularpage/duyurularpage.component";

import { BurslarpageComponent } from "./burslarpage/burslarpage.component";
import { BursdetaypageComponent } from "./bursdetaypage/bursdetaypage.component";
import { BursbasvurupageComponent } from "./bursbasvurupage/bursbasvurupage.component";

import { AtolyelerpageComponent } from "./atolyelerpage/atolyelerpage.component";
import { AtolyebasvurupageComponent } from "./atolyebasvurupage/atolyebasvurupage.component";

import { GonullulerimizpageComponent } from "./gonullulerimizpage/gonullulerimizpage.component";
import { GonulluolunpageComponent } from "./gonulluolunpage/gonulluolunpage.component";
import { ContactuspageComponent } from "./contactuspage/contactuspage.component";

import { RecentcausesComponent } from "./recentcauses/recentcauses.component";

import { convertHtmlToText } from "./convertHTMLToText.pipe";

@NgModule({
  imports: [
    CommonModule,
    LatemoduleRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AboutpageComponent,
    TarihcepageComponent,
    ProjelerpageComponent,
    ProjedetaypageComponent,
    DuyurularpageComponent,
    BurslarpageComponent,
    BursdetaypageComponent,
    BursbasvurupageComponent,
    AtolyelerpageComponent,
    AtolyebasvurupageComponent,
    GonullulerimizpageComponent,
    GonulluolunpageComponent,
    ContactuspageComponent,
    RecentcausesComponent,

    convertHtmlToText
  ]
})
export class LateModule {}
