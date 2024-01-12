import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome: string = 'João';
  dataNascimento = "1995-01-01";
  urlImagem = "/assets/joao.JPG";

  mostrarDataNascimento(){
    alert(`A data de nascimento do joão é: ${this.dataNascimento}`)
  }
}
