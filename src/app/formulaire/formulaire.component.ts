import { Personne } from './../interfaces/personne';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  nom = "";
  result = "";
  personne: Personne = {};

  constructor() { }

  ngOnInit(): void {}
  direBonjour() {
    this.result = this.nom;
    console.log('Bonjour, hello, hola');
  }

}
