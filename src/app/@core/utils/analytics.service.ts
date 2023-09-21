import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

declare const gtag: Function;

@Injectable()
export class AnalyticsService {
  private enabled: boolean;

  constructor(
    private $gaService: GoogleAnalyticsService
  ) {
    this.enabled = true;
  }

  // trackPageViews() {
  //   // if (this.enabled) {
  //   //   this.router.events.pipe(
  //   //     filter((event) => event instanceof NavigationEnd),
  //   //   )
  //   //     .subscribe(() => {
  //   //       this.$gaService.pageView(this.location.path())
  //   //     });
  //   // }
  // }

  trackEvent(eventName: string) {
    // if (this.enabled) {
    //   gtag('event', eventName, {
    //     'page_location': window.location.href,
    //     'page_path': window.location.pathname,
    //     'value': 999876
    //   });
    // }
    this.$gaService.event('login', 'Teste Login', 'Acceden a la plataforma')
  }
}
