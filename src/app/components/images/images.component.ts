import { Component, OnInit,Input } from '@angular/core';
import {ImagesService} from 'src/app/services/images.service';
import {Image} from 'src/app/models/image.interface';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
  animations: [
    trigger('changeState', [
      state ('stateOn', style({transform: 'translateX(-50%)', opacity: 1})),
      state ('stateChange', style({transform: 'translateX(150%)', opacity: 0, display: 'none'})),
      transition('stateChange=>stateOn', [animate('0.3s ease-in')]),
      transition('stateOn=>stateChange', [animate('0.3s ease-out')])
  ])
  ]
})

export class ImagesComponent implements OnInit {
  
  images: Image[]=[];
  public display: number = 1;
  breakpoint: number | undefined;

  constructor(private imagesService:ImagesService) { }

  @Input() currentState: any ;
  toState = 'stateOn';

  ngOnInit(): void {
    this.imagesService
       .getAllImages()
       .subscribe((images)=>this.images=images);
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 4;
  }

  changeDisplay(mode: number): void {
    this.display = mode;
    this.toState = 'stateChange';
  }

  onResize() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 4;
  }

}
