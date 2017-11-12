import { Component, OnInit } from '@angular/core';
import $ from "jquery";
@Component({
  selector: 'app-product-search-carousel',
  templateUrl: './product-search-carousel.component.html',
  styleUrls: ['./product-search-carousel.component.css']
})
export class ProductSearchCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.carousel .vertical .item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=1;i<2;i++) {
        next=next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        
        next.children(':first-child').clone().appendTo($(this));
      }
      });
  }

}
