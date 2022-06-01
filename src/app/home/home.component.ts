import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slideIndex = 1;

  constructor() {
  }

  ngOnInit(): void {
    // slider functionality
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      this.slideIndex = 1
    }
    if (n < 1) {
      this.slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      var slidesHtmlEle = (slides[i] as HTMLElement);
      slidesHtmlEle.style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    var slidesIndexHtmlEle = (slides[this.slideIndex - 1] as HTMLElement);
    slidesIndexHtmlEle.style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }


  // send button functionality
  submit() {
    alert("Thanks for submitting you feedback");
  }
}
