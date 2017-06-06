import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes: Hero[];
  title: string = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Markus'
  };
  selectedHero: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero
  }
}
