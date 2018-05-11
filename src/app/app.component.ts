import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detailsDisplayed = true;
  buttonClicks = [];

  onButtonClick() {
    this.detailsDisplayed = !this.detailsDisplayed;
    this.buttonClicks.push({ timestamp: new Date(), styled: this.buttonClicks.length >= 4 });
  }
}
