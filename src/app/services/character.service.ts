import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CharacterInterface} from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient:HttpClient) { }

  getCharacters():Observable<any>{
    return this.httpClient.get(`http://localhost:3000/characters`)
}

  getCharactersDetail(id:string):Observable<any> {
    return this.httpClient.get(`http://localhost:3000/characters/${id}`)
  }

  postCharacter(character:CharacterInterface){
    return this.httpClient.post(`http://localhost:3000/characters`, character)
  }

}


