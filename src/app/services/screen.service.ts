import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  _screenInfo: any

  private saveScreenInfo = new Subject<any>();

  screenInfo = this.saveScreenInfo.asObservable();

  emitScreenInfo(screenInfo: any) {
    console.log(screenInfo);
    this._screenInfo = screenInfo
    this.saveScreenInfo.next(screenInfo);
  }

  checkScreenType() {
    const screenInfo = {
      size: screen.width,
      type: screen.width < 1024 ? 0 : 1,
      typeName: screen.width < 1024 ? 'Mobile' : 'Desktop'
    }
    console.log(screenInfo);

    this.emitScreenInfo(screenInfo)
  }

  constructor() { }
}
