import { Component } from '@angular/core';
import { CharacterInterface } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  characterList: CharacterInterface[]=[];

  constructor(private characterService:CharacterService){}

  ngOnInit(){
    this.characterService.getCharacters().subscribe(data =>{
      this.characterList=data;
      console.log(data)
    });
  }

  // private getCharacters(){
  //   this.characterService.getCharacters().subscribe((list)=>{
  //     //console.log(data.data.characters);
  //     this.characterList = list;
  //   })
  // }

}
