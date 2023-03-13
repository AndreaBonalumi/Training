import {MyTableConfig} from "./my-table-config";
export const   DATA : any[] = [
  {key: 'uno', label: 'nome1'},
  {key: 'due', label: 'nome2'},
  {key: 'tre', label: 'nome3'},
  {key: 'quattro', label: 'nome4'},
  {key: 'cinque', label: 'nome5'},
  {key: 'sei', label: 'nome6'},
  {key: 'sette', label: 'nome7'},
  {key: 'otto', label: 'nome8'},
  {key: 'nove', label: 'nome9'},
  {key: 'dieci', label: 'nome10'},
  {key: 'unici', label: 'nome11'},
  {key: 'dodici', label: 'nome12'},
  {key: 'tredici', label: 'nome13'},
  {key: 'quattordici', label: 'nome14'},
  {key: 'quindici', label: 'nome15'},
];
export const TABLE : MyTableConfig = {
  headers: [
    {key: 'key', label: 'Key'},
    {key: 'label', label: 'Label'},
  ],
  order: {
    colonna: 'key',
    verso: 'asc'
  }
}
