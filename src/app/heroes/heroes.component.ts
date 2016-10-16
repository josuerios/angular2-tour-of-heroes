import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Hero } from '../shared/hero'
import { HeroService } from '../shared/hero.service'


@Component({
    selector: 'heroes',
    templateUrl: './heroes.component.jade',
    styleUrls: ['./heroes.component.css'],
    providers: [HeroService]
})
export class HeroesComponent implements OnInit {

    title:string = 'My heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService,private router:Router) { }


    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

}
