import { Component, OnInit } from '@angular/core';
import { HeroService } from '../shared/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heroes: any[];
  heroesFound = false;
  heroSelection = {};

  constructor(private heroService: HeroService) {}

  ngOnInit() {
  }

  onSearch(hero: string) {
    return this.heroService.onSearchHero(hero)
    .subscribe(
      data => this.searchCompleted(data),
      error => console.log(error),
      () => console.log('Request Complete')
    );
  }

  searchCompleted(data) {
    this.heroesFound = true;
    this.heroes = data.results;
    console.log(data);
  }

  selectedHero(hero) {
    this.heroService.selectedHero(hero);
  }
}
