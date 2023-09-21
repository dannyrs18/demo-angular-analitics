import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

declare const gtag: Function;

@Injectable()
export class AnalyticsService {
  private enabled: boolean;

  constructor(private location: Location, private router: Router) {
    this.enabled = true;
  }

  trackPageViews() {
    if (this.enabled) {
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
      )
        .subscribe(() => {
          gtag('config', 'G-17TQTS07G0', {
            'page_path': this.location.path()
          });
        });
    }
  }

  trackEvent(eventName: string) {
    if (this.enabled) {
      gtag('event', eventName);
    }
  }
}
