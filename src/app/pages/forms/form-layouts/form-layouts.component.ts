import { Component } from '@angular/core';
import { AnalyticsService } from '../../../@core/utils';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent {

  constructor(
    private analiticService: AnalyticsService
  ){}

  sendForm() {
    this.analiticService.trackEvent("Login")
  }
}
