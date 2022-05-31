import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  inputs: ['title']
})
export class ToolbarComponent implements OnInit {

  @Input() titleTool: string = '';
 
  constructor() { }

  ngOnInit(): void {
  }

}
