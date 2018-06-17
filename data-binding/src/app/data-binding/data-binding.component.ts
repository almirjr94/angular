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

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  getValor() {
    return 1;
  }

  getBotaoClicado() {
    alert("EU SOU FODA");
  }

  onKeyUP(evento: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }
  constructor() { }

  ngOnInit() {
  }

}
