import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent implements OnInit {
  @Output() title: string = 'Adicionar Usuário'

  constructor() { }

  ngOnInit(): void {
  }

}
