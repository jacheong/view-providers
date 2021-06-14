import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class GalleryLoggerService implements Logger {
  private _prefix = 'Gallery Log';

  constructor() { }

  log( message: string ): void {
    console.log(`${this._prefix}: ${message}`);
  }
}
