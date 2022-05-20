import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {img: "/assets/socialday/2.png"},
    {img: "/assets/socialday/3.png"},
    {img: "/assets/socialday/4.png"},
    {img: "/assets/socialday/5.png"},
    {img: "/assets/socialday/6.png"},
    {img: "/assets/socialday/7.png"},
    {img: "/assets/socialday/8.png"}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 1};
   
  slickInit(e:any) {
    console.log('slick initialize:anyd');
  }
     
  breakpoint(e:any) {
    console.log('breakpoint');
  }
     
  afterChange(e:any) {
    console.log('afterChange');
  }
     
  beforeChange(e:any) {
    console.log('beforeChange');
  }

}
