import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeroService } from '../shared/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  hero = {};

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    if (this.heroService.heroSelection === '') {
      this.hero = '';
    } else {
      this.hero = this.heroService.heroSelection;
    }
  }
  ngOnDestroy() {
    this.hero = '';
  }
}
