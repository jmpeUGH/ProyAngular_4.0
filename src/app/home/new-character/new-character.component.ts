import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent {

  public formGroup!: FormGroup;

  constructor(private formBuilder:FormBuilder, private characterService:CharacterService){}

  ngOnInit(){
    this.initForm();

  }

  private initForm(){
    this.formGroup = this.formBuilder.group({
      name:[''],
      actor:[''],
      race:[''],
      realm:[''],
      role:['']
    })
  }

  public handleSubmit(){
    console.log(this.formGroup.value)
    this.characterService.postCharacter(this.formGroup.value).subscribe(response=> {
      console.log(response)
    })
  }

}
