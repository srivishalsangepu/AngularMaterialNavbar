import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }
  @Input() displayedColumns;
  @Input() dataSource;
  @Input() user;

  ngOnInit() {
    console.log(this.displayedColumns);
    console.log(this.dataSource);
    console.log(this.user);
  }

}
