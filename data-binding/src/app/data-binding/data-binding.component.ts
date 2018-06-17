import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http//loiane.com';
  cursoAngular: boolean = true;
  urlImage: string = "https://picsum.photos/400/200/?random";
  valorSalvo: string = '';

  valorAtual: string = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'angular';

  valorInicial = 15;

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  getValor() {
    return 1;
  }

  getBotaoClicado() {
    alert("TESTE 123");
  }

  onKeyUP(evento: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
