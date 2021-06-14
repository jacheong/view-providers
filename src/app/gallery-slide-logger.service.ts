import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class GallerySlideLoggerService implements Logger {
  private _prefix = 'Gallery Slide';

  constructor() { }

  log(message: string): void {
    console.log(`${this._prefix}: ${message} (from slide)`);
  }
}
