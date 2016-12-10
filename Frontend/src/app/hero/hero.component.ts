import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() : void {
    this.heroService
    .getValues()
    .then(heroes => this.heroes = heroes);
  }
  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }
}
