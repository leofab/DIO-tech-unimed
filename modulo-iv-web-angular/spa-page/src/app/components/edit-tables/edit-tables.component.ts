import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-tables',
  templateUrl: './edit-tables.component.html',
  styleUrls: ['./edit-tables.component.css']
})
export class EditTablesComponent implements OnInit {

  userPosition: string = '';

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.userPosition = String(this.activateRoute.snapshot.paramMap.get('position'));
  }

}
