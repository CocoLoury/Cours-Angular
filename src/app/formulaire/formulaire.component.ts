import { Personne } from './../interfaces/personne';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  result = "";
  personne: Personne = {};

  constructor() { }

  ngOnInit(): void {}
  direBonjour() {
    console.log('Bonjour, hello, hola');
  }

}
