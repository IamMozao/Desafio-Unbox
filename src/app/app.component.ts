import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ScreenService } from './../app/services/screen.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppComponent {
  title = 'unbox-teste';

  private saveScreenInfo = new Subject<any>();

  screenInfo = this.saveScreenInfo.asObservable();

  constructor(
    private screenService: ScreenService
  ) {
    this.screenService.checkScreenType()
  }

  onActivate(event) {
    console.log(event);

  }
  onResize(event) {
    this.screenService.checkScreenType()

  }
}


