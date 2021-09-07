import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from './review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  review:Review[]=[];
  constructor(private reviewService:ReviewService,private activatedRoute:ActivatedRoute) { }

  getReview(model: any) {
    this.reviewService.getReviewByModel(model).subscribe(data=>{this.review=data});
    console.log(this.review);
    }
  ngOnInit(): void {
  }
}
