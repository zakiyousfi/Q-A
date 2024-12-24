import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  @Input()

  quesMonEns!: string;
  reponseetud!: string;
  @Output () repFinal= new EventEmitter<string>();
  constructor(){}
  ngOnInit(): void {
    
  }
  envoiRep(){
    this.repFinal.emit(this.reponseetud);
  }

}


