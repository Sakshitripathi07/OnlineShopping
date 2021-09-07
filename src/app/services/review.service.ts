import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../components/review/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  public constructor(private httpClient: HttpClient) { }


  public getReviewByModel(model: string): Observable<Review[]> {
    return this.httpClient.get<Review[]>('http://localhost:8087/getReview/' + model);   
  }

  public getReviewsByUsername(username:string):Observable<Review[]>{
    return this.httpClient.get<Review[]>('http://localhost:8087/getReview/username/'+username);
  }
}
