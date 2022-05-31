import { Component, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-tables',
  templateUrl: './edit-tables.component.html',
  styleUrls: ['./edit-tables.component.css']
})
export class EditTablesComponent implements OnChanges {

  userPosition: string = '';

  constructor(private ActivateRoute: ActivatedRoute) { }

  ngOnChanges(): void {
      this.userPosition = String(this.ActivateRoute.snapshot.paramMap.get('position'));
  }

}
