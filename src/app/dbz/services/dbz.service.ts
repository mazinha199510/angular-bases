import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})

export class DbzService {
  public characters : Character[] = [{ id: uuid(), name: "krillin", power : 1000 }, { id: uuid(), name : "Goku", power : 9500 }, { id: uuid(), name : "Vegeta", power : 7500 }];

  addCharacter( character : Character): void{
    const newCharacter : Character = {
      id: uuid(), ...character
    };

    this.characters.push(newCharacter);
  }

  // DeleteCharacter(i:number): void{
  //   this.characters.splice(i,1);
  // }

  deleteCharacterById( id : string){
    this.characters = this.characters.filter(x => x.id !== id);
  }

  constructor() { }

}
