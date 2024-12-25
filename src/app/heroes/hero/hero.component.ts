import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "Ironman";
  public age: number = 45;

  get capitalizeName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    let names: string[] = ["Ironman", "Spiderman", "Wolverine", "Deadpool", "Storm", "Hulk"];
    this.name = names[Math.floor(Math.random() * names.length)];
  }

  changeAge():void{
    let ages: number[] = [45,25,100,40,39,50];
    this.age = ages[Math.floor(Math.random() * ages.length)];
  }

  resetForm():void{
    this.name = "Ironman";
    this.age = 45;
  }
}
