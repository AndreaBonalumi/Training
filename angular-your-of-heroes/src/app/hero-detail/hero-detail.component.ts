import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{

  hero !: Hero;
  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) {}
  ngOnInit() {
    this.heroService.getHero(parseInt(this.route.snapshot.paramMap.get('id')!))
      .subscribe(hero => this.hero = hero);
    /* this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes); */
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
  delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id).subscribe(() => this.goBack());
  }
}

