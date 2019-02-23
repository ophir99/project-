import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images = [];
  i = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data:any
  ) { 

    this.images = this.data.images;
  }

  ngOnInit() {
    console.log(this.data);
  }

  showNext(){
    if(this.i < this.images.length){
      this.i = this.i + 1;
    }
  }
  showPrev(){
    if(this.i > 0){
      this.i = this.i - 1;
    }
  }

}
