import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  imageObject = [{
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    title: 'Hummingbirds are amazing creatures'
  }, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
  }, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    title: 'Example with title.'
  }, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    title: 'Hummingbirds are amazing creatures'
  }, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
  }, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    title: 'Example two with title.'
  }];

  brnadObject = [
    {
      image: 'https://www.emporium.themeseason.com/assets/images/brands/dream.png',
      thumbImage: 'https://www.emporium.themeseason.com/assets/images/brands/dream.png',
      // title: 'Hummingbirds are amazing creatures'
    }, {
      image: 'https://www.emporium.themeseason.com/assets/images/brands/congrats.png',
      thumbImage: 'https://www.emporium.themeseason.com/assets/images/brands/congrats.png'
    }, {
      image: 'https://www.emporium.themeseason.com/assets/images/brands/retro.png',
      thumbImage: 'https://www.emporium.themeseason.com/assets/images/brands/retro.png',
      // title: 'Example with title.'
    }, {
      image: 'https://www.emporium.themeseason.com/assets/images/brands/king.png',
      thumbImage: 'https://www.emporium.themeseason.com/assets/images/brands/king.png',
      // title: 'Hummingbirds are amazing creatures'
    }, {
      image: 'https://www.emporium.themeseason.com/assets/images/brands/special.png',
      thumbImage: 'https://www.emporium.themeseason.com/assets/images/brands/special.png'
    }, {
      image: 'https://www.emporium.themeseason.com/assets/images/brands/congrats.png',
      thumbImage: 'https://www.emporium.themeseason.com/assets/images/brands/congrats.png',
      // title: 'Example two with title.'
    },
    {
      image: 'https://www.emporium.themeseason.com/assets/images/brands/dream.png',
      thumbImage: 'https://www.emporium.themeseason.com/assets/images/brands/dream.png',
      // title: 'Hummingbirds are amazing creatures'
    }, {
      image: 'https://www.emporium.themeseason.com/assets/images/brands/congrats.png',
      thumbImage: 'https://www.emporium.themeseason.com/assets/images/brands/congrats.png'
    }, {
      image: 'https://www.emporium.themeseason.com/assets/images/brands/retro.png',
      thumbImage: 'https://www.emporium.themeseason.com/assets/images/brands/retro.png',
      // title: 'Example with title.'
    }, {
      image: 'https://www.emporium.themeseason.com/assets/images/brands/king.png',
      thumbImage: 'https://www.emporium.themeseason.com/assets/images/brands/king.png',
      // title: 'Hummingbirds are amazing creatures'
    }, {
      image: 'https://www.emporium.themeseason.com/assets/images/brands/special.png',
      thumbImage: 'https://www.emporium.themeseason.com/assets/images/brands/special.png'
    }, {
      image: 'https://www.emporium.themeseason.com/assets/images/brands/congrats.png',
      thumbImage: 'https://www.emporium.themeseason.com/assets/images/brands/congrats.png',
      // title: 'Example two with title.'
    }];

  constructor() {
    console.log('Home');

  }

}
