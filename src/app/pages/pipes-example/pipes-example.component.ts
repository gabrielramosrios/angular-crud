import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0;
  text = 'hello world!';
  date = new Date();
  pessoa = {
    nome: 'Gabriel',
    idade: 27,
    profissao: 'Desenvolvedor'
  };
  nomes = ['Gabriel']

  constructor() { }

  ngOnInit(): void {
  }

  mudaValor() {
    this.text = 'novo texto'
  }

  add(text: string) {
    this.nomes.push(text);

  }
}
