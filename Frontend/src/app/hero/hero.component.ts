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
  add(id:number, name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create({id:id,name:name})
      .then(hero => {
        this.heroes.push(hero);
      })
      .catch(this.handleError);
  }
  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  private handleError(error: any): void {
    console.log(error.message || error);
  }
}
