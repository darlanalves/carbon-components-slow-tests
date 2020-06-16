import { Component } from '@angular/core';
import { TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tableModel = new TableModel();

  constructor() {
    const data = Array(10).fill(null).map(() => {
      return [new TableItem({ data: 'Random Text #' + Math.random() })];
    });

    this.tableModel.header = [
      new TableHeaderItem({ data: 'Text' }),
    ];

    this.tableModel.data = data;
  }
}
