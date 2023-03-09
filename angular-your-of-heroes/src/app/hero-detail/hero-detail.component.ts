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
  constructor(private route: ActivatedRoute, private heroServices: HeroService,
              private location: Location) {
  }
  ngOnInit() {
    this.hero = this.heroServices.getHero(parseInt(this.route.snapshot.paramMap.get('id')!))
  }
  goBack(): void {
    this.location.back();
  }
}

