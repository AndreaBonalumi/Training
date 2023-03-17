import {MyTableConfig} from "./interfaces/my-table-config";
import {MyTableActionEnum} from "./my-table-action-enum";

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
    verso: 'asc',
  },
  search: {columns: ['key', 'label']},
  pagination: {itemPerPage: 3, itemPerPageOption: [2, 5, 7, 4]},
  actions: [
    {onTop: true, action: MyTableActionEnum.NEW_ROW, icon: 'postcard', class: 'primary'},
    {onTop: false, action: MyTableActionEnum.EDIT, icon: 'pencil', class: 'secondary'},
    {onTop: false, action: MyTableActionEnum.DELETE, icon: 'trash3', class: 'secondary'}
  ]
}
