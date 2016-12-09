import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/ToPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  private valueUrl = 'api/hero';
  constructor(private http: Http) { }

  getValues(): Promise<Hero[]> {
    return this.http.get(this.valueUrl)
      .toPromise()
      .then(response => response.json() as Hero[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
