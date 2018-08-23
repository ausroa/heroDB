import { Component } from '@angular/core';
import { HeroService } from './shared/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes: any[];
  heroesFound: boolean = false;
  
  constructor(private heroService: HeroService) {}

  onSearch(hero: string) {
    return this.heroService.onSearchHero(hero)
    .subscribe(
      data => this.searchCompleted(data),
      error => console.log(error),
      () => console.log("Request Complete")
    );
  }

  searchCompleted(data) {
    this.heroesFound = true;
    this.heroes = data.results;
    console.log(data.results);
  }
}
