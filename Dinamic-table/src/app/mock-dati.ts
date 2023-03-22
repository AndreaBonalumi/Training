import { MyTableConfig} from "./interfaces/my-table-config";
import {MyTableActionEnum} from "./my-table-action-enum";

export const   DATA : any[] = [
  {key: 'uno', label: 'nome1', role: 'admin'},
  {key: 'due', label: 'nome2', role: 'admin'},
  {key: 'tre', label: 'nome3', role: 'admin'},
  {key: 'quattro', label: 'nome4', role: 'customer'},
  {key: 'cinque', label: 'nome5', role: 'customer'},
  {key: 'sei', label: 'nome6', role: 'customer'},
  {key: 'sette', label: 'nome7', role: 'customer'},
  {key: 'otto', label: 'nome8', role: 'customer'},
  {key: 'nove', label: 'nome9', role: 'customer'},
  {key: 'dieci', label: 'nome10', role: 'customer'},
  {key: 'unici', label: 'nome11', role: 'customer'},
  {key: 'dodici', label: 'nome12', role: 'customer'},
  {key: 'tredici', label: 'nome13', role: 'customer'},
  {key: 'quattordici', label: 'nome14', role: 'customer'},
  {key: 'quindici', label: 'nome15', role: 'customer'},
];
export const TABLE : MyTableConfig = {
  headers: [
    {key: 'key', label: 'Nome'},
    {key: 'label', label: 'Cognome'},
    {key: 'role', label: 'Ruolo'}
  ],
  order: {
    colonna: 'key',
    verso: 'asc',
  },
  search: {columns: ['key', 'label']},
  pagination: {itemPerPage: 3, itemPerPageOption: [2, 5, 7, 4, 3]},
  actions: [
    { onTop: true,
      buttonAction: {
        text: MyTableActionEnum.NEW_ROW,
        icon: 'postcard',
        class: 'primary'
      },
    },
    { onTop: false,
      buttonAction: {
        text: MyTableActionEnum.EDIT,
        icon: 'pencil',
        class: 'secondary'
      },
    },
    { onTop: false,
      buttonAction: {
        text: MyTableActionEnum.DELETE,
        icon: 'trash3',
        class: 'secondary'
      },
      hidden: (item: any): boolean => {
        return item['role'] == 'admin';
      },
    },
    { onTop: false,
      buttonAction: {
        text: 'Cambia ruolo',
        icon: 'arrow-downward',
        class: 'primary'
      },
    },
  ],
}
