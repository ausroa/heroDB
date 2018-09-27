import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private API_KEY: string = environment.HERO_API_KEY;
  private API_URL: string = environment.HERO_API_URL;
  private API_SEARCH: string = environment.HERO_API_SEARCH;
  private URL: string = this.API_URL + this.API_KEY + this.API_SEARCH;
  public heroSelection = {};

  constructor(private http: HttpClient) { }

  onSearchHero(hero: string) {
    return this.http.get(this.URL + hero);
  }

  selectedHero(hero) {
    this.heroSelection = hero;
  }
}
