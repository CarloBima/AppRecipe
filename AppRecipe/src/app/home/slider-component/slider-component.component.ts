import { Component, Input, OnInit } from '@angular/core';
import { Receipt } from 'src/app/models/receipt.model';

@Component({
  selector: 'app-slider-component',
  templateUrl: './slider-component.component.html',
  styleUrls: ['./slider-component.component.css'],
})
export class SliderComponentComponent implements OnInit {
  @Input() listToSlide: Receipt[] = [];

  // fields for carousel
  height: number = 250; // Carousel height.
  width: number = 1000; // Carousel Width.
  cellWidth: number = 200; // Cell width.
  cellsToShow: number = 3; // The number //  of cells to display, regardless of the width of the container.
  cellsToScroll: number = 2; //	The number of carousel cells to scroll per arrow click.
  loop: boolean = true; // 	false	Infinite loop.
  lightDOM: boolean = true; // Keep a limited number of cells in the DOM tree for an unlimited number of images. As the carousel scrolls, the images will be lazy loaded. This allows you not to overload the browser memory. This mode works only with images passed as an array.
  overflowCellsLimit: number = 3; // The number of carousel cells that will be stored for in the DOM tree outside the scope.
  freeScroll: boolean = false; // The carousel will stop where the touch ended and will not automatically align.
  autoplay: boolean = true; // Automatically start the carousel after initialization.
  autoplayInterval: number = 100; // The interval between scrolling the carousel. Used together with autoplay.
  pauseOnHover: boolean = true; // Stops autoplay if the cursor is over the carousel area.
  dots: boolean = true; // Carousel progress bar.
  margin: number = 10; // Cell spacing.
  minSwipeDistance: number = 10; // Minimum distance for swipe.
  transitionDuration: number = 300; //	Animation duration.
  transitionTimingFunction: string = 'ease-in-out'; // 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'	'ease-in-out'	Smooth animation function.
  counter: boolean = false; // Counter.
  counterSeparator: string = ' / '; // Counter separator.
  borderRadius: number = 0; // Border radius for carousel cells.
  arrows: boolean = true; // Arrows for image navigation.
  arrowsOutside: boolean = false; // Arrows on the outside of the carousel container.
  arrowsTheme: string = 'dark'; // 'dark'	'light',	Arrow color theme.

  constructor() {}

  ngOnInit(): void {}
}
