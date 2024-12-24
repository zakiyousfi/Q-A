import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit{
  Question!: string;
  Reponse!: string;
  message!: string;
  constructor(){}
  ngOnInit(): void {
    this.Question="Quel est le language de programation utilise pour dev une app web";
    this.Reponse="TypeScript";
  }
  correction(reponseetud :string){
    if (this.Reponse === reponseetud){
      this.message='Bravo';
    }
    else{
      this.message='Echec';
      
    }
  }
}
