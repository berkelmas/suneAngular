import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  title = 'suneAngular';

  ngAfterViewInit (): void {

    try {
      // @ts-ignore
      twttr.widgets.load();
    } catch {
      console.log('twitter error catched');
    }

  }
}
