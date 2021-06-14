import { Component, OnInit } from '@angular/core';
import { GalleryLoggerService } from '../gallery-logger.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  // viewProviders make the defined providers only available to the components
  // rendered in the view, NOT projected into the view
  viewProviders: [
    GalleryLoggerService
  ]
})
export class GalleryComponent implements OnInit {

  constructor(
    private logger: GalleryLoggerService
  ) { }

  ngOnInit(): void {
    this.logger.log("Gallery Initialization");
  }

}
