import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { ProductListService } from 'src/app/services/product-list.service';
import { ReviewService } from 'src/app/services/review.service';
import { Product } from '../product-list/product';
import { Review } from '../review/review';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  product: Product = new Product(0, "", "", "", "", [], 0, 0);
  review: Review[] = [];
  public constructor(private productListService: ProductListService, private activatedRoute: ActivatedRoute,
    private reviewService: ReviewService,private helper:HelperService) { }
  model: any;
  user:any;
  ngOnInit(): void {
    this.model = this.activatedRoute.snapshot.paramMap.get('model');
    this.getProductByModel(this.model);
    this.getReview(this.model);
    this.user=this.helper.getUser();
  }
  public getProductByModel(model: any) {
    this.productListService.getProductByModel(model).subscribe(data => { console.log(data); this.product = data });
  }
  public getReview(model: string) {
    this.reviewService.getReviewByModel(model).subscribe(data => { console.log(data); this.review = data; });
}

}