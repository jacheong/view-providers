import { Component, OnInit } from '@angular/core';
import { Logger } from '../logger';
import { GalleryLoggerService } from '../gallery-logger.service';
import { GallerySlideLoggerService } from '../gallery-slide-logger.service';

@Component({
  selector: 'app-gallery-slide',
  templateUrl: './gallery-slide.component.html',
  styleUrls: ['./gallery-slide.component.scss'],
  providers: [
  ]
})
export class GallerySlideComponent implements OnInit {

  constructor(
    private logger: GalleryLoggerService
  ) { }

  ngOnInit(): void {
    this.logger.log('Slide Initialization');
  }

}
