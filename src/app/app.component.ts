import { Component } from '@angular/core';
import { GallerySlideLoggerService } from './gallery-slide-logger.service';
import { GalleryLoggerService } from './gallery-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: GalleryLoggerService,
      useExisting: GallerySlideLoggerService
    }
  ]
})
export class AppComponent {
  title = 'view-providers';
}
