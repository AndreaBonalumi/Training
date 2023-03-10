import { Component } from '@angular/core';
import {MyTableConfig} from "./my-table-config";
import {Ordinamento} from "./ordinamento";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tableConfig : MyTableConfig = {
    headers: [
      {key: 'key', label: 'Key'},
      {key: 'label', label: 'Label'},
    ]
  }
  data : any[] = [
    {key: 'uno', label: 'ciao'},
    {key: 'due', label: 'sono'},
    {key: 'tre', label: 'riga1'},
    {key: 'uno', label: 'ciao'},
    {key: 'due', label: 'sono'},
    {key: 'tre', label: 'riga2'},
    {key: 'uno', label: 'ciao'},
    {key: 'due', label: 'sono'},
    {key: 'tre', label: 'riga3'},
    {key: 'uno', label: 'ciao'},
    {key: 'due', label: 'sono'},
    {key: 'tre', label: 'riga4'},
    {key: 'uno', label: 'ciao'},
    {key: 'due', label: 'sono'},
    {key: 'tre', label: 'riga5'},
  ];
  ordinamento: Ordinamento = {
    colonna: 'key',
    verso: 'asc'
  }
}
