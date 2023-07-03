import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterInterface, CharacterResp } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {

  characterItem:any;

  constructor(private activatedRoute:ActivatedRoute, private characterService:CharacterService){ }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params=>{
      console.log(params['id']);
      this.getcharacterDetail(params['id'])
    })


  }

  private getcharacterDetail(id:string){
    this.characterService.getCharactersDetail(id).subscribe((objRecibido:CharacterResp)=>{
      console.log(objRecibido)
      this.characterItem=objRecibido;

    })
  }

}
