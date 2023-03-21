import {ActionConfig, MyTableConfig} from "./interfaces/my-table-config";
import {MyTableActionEnum} from "./my-table-action-enum";

export const   DATA : any[] = [
  {key: 'uno', label: 'nome1', ruolo: 'admin'},
  {key: 'due', label: 'nome2', ruolo: 'admin'},
  {key: 'tre', label: 'nome3', ruolo: 'admin'},
  {key: 'quattro', label: 'nome4', ruolo: 'customer'},
  {key: 'cinque', label: 'nome5', ruolo: 'customer'},
  {key: 'sei', label: 'nome6', ruolo: 'customer'},
  {key: 'sette', label: 'nome7', ruolo: 'customer'},
  {key: 'otto', label: 'nome8', ruolo: 'customer'},
  {key: 'nove', label: 'nome9', ruolo: 'customer'},
  {key: 'dieci', label: 'nome10', ruolo: 'customer'},
  {key: 'unici', label: 'nome11', ruolo: 'customer'},
  {key: 'dodici', label: 'nome12', ruolo: 'customer'},
  {key: 'tredici', label: 'nome13', ruolo: 'customer'},
  {key: 'quattordici', label: 'nome14', ruolo: 'customer'},
  {key: 'quindici', label: 'nome15', ruolo: 'customer'},
];
export const TABLE : MyTableConfig = {
  headers: [
    {key: 'key', label: 'Nome'},
    {key: 'label', label: 'Cognome'},
    {key: 'ruolo', label: 'Ruolo'}
  ],
  order: {
    colonna: 'key',
    verso: 'asc',
  },
  search: {columns: ['key', 'label']},
  pagination: {itemPerPage: 3, itemPerPageOption: [2, 5, 7, 4]},
  actions: [
    { onTop: true,
      buttonAction: {
        text: MyTableActionEnum.NEW_ROW,
        icon: 'postcard',
        class: 'primary'
      },
      hidden: false
    },
    { onTop: false,
      buttonAction: {
        text: MyTableActionEnum.EDIT,
        icon: 'pencil',
        class: 'secondary'
      },
      hidden: false
    },
    { onTop: false,
      buttonAction: {
        text: MyTableActionEnum.DELETE,
        icon: 'trash3',
        class: 'secondary'
      },
      hidden: true
    },
    { onTop: false,
      buttonAction: {
        text: 'Cambia ruolo',
        icon: 'arrow-downward',
        class: 'primary'
      },
      hidden: false
    },
  ],
  lambdaFunction: (item: any, azione: ActionConfig): boolean => {
    for(let column in item) {
      if(item[column] == 'admin' && azione.hidden)
        return true
    }
    return  false
  },
}
