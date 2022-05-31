import { Component, OnChanges } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  position: string;
  email: string;
  symbol: string;
  img: string;
  id: number;
}

export let ELEMENT_DATA: PeriodicElement[] = [
  {id: 0, img:'../../../assets/img/jeremy.jpg', position: 'CEO', name: 'Jeremy Hitchkins', email: 'JeremyCeo@bol.com', symbol: 'H',},
  {id: 1, img:'../../../assets/img/john.jpg',position: 'Tech Lead', name: 'John Goliath', email: 'JohnTL@bol.com', symbol: 'He', },
  {id: 2, img:'../../../assets/img/mary.jpg',position: 'Front Senior', name: 'Mary Moon', email: 'MarySen@bol.com', symbol: 'Li', },
  {id: 3, img:'../../../assets/img/unkown.jpg',position: 'Front Pleno', name: 'Fred Cocoon', email: 'FredPleno@bol.com', symbol: 'Be', },
  {id: 4, img:'../../../assets/img/suzan.jpg',position: 'Front Junior', name: 'Suzan Fritz', email: 'SuzanJun@bol.com', symbol: 'B', },
  {id: 5, img:'../../../assets/img/unkown.jpg',position: 'DB / Back Senior', name: 'Dan Pan', email: 'DanPanDB@bol.com', symbol: 'C', }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {

  constructor() { }

  ngOnChanges(): void {
  }

  displayedColumns: string[] = ['select', 'img', 'name','position', 'email', 'symbol',];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


}
