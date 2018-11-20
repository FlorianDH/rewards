import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';      // (1)
import { EMPTY, Observable } from 'rxjs';
import { catchError, share, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  readonly ROOT_URL = 'https://localhost:3000/rewards';

  constructor(private http: HttpClient) {
  }

  getRewards$(): Observable<any> {
    const params = new HttpParams();

    return this.http.get(this.ROOT_URL, {params})
      .pipe(
        tap(req => console.log('get-request', req)),               // (6)
        catchError(                                                // (7)
          (error) => {
            console.log(error);
            alert(error.message);
            return EMPTY;
          }),
        share()                                                    // (8)
      );
  }
}
