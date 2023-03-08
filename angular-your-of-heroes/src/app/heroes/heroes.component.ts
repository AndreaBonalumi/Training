import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes: Hero[] = []
  e ?: Hero

  constructor(private heroService: HeroService) {}
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
    onClick(eroe: Hero) {
    this.e = eroe;
    eroe.visualizza = !eroe.visualizza
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
