import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import{ImagesService} from 'src/app/services/images.service'
import { Image } from 'src/app/models/image.interface';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  
  image?: Image;
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  constructor(
    private imagesService:ImagesService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    const identifier=this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier -->',identifier);
   
    
    this.imagesService.getImageById(identifier!).subscribe((image)=>{

      if(!image){
        return this.router.navigateByUrl('/');
      }

      this.image=image;
      console.log('Image -->',this.image);
      return null;
    });
    
  }

}
