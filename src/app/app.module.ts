import { BrowserModule, Title, Meta } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToastrModule } from "ngx-toastr";

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { velocity: 0.4, threshold: 20 } // override default settings
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "suneAngular" }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,
    HttpClientModule
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
export class AppModule {}
