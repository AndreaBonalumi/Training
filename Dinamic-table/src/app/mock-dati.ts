import {MyTableConfig} from "./interfaces/my-table-config";
import {MyTableActionEnum} from "./my-table-action-enum";

export const   DATA : any[] = [
  {key: 'uno', label: 'nome1', ruolo: 'admin'},
  {key: 'due', label: 'nome2', ruolo: 'admin'},
  {key: 'tre', label: 'nome3', ruolo: 'admin'},
  {key: 'quattro', label: 'nome4', ruolo: 'utente'},
  {key: 'cinque', label: 'nome5', ruolo: 'utente'},
  {key: 'sei', label: 'nome6', ruolo: 'utente'},
  {key: 'sette', label: 'nome7', ruolo: 'utente'},
  {key: 'otto', label: 'nome8', ruolo: 'utente'},
  {key: 'nove', label: 'nome9', ruolo: 'utente'},
  {key: 'dieci', label: 'nome10', ruolo: 'utente'},
  {key: 'unici', label: 'nome11', ruolo: 'utente'},
  {key: 'dodici', label: 'nome12', ruolo: 'utente'},
  {key: 'tredici', label: 'nome13', ruolo: 'utente'},
  {key: 'quattordici', label: 'nome14', ruolo: 'utente'},
  {key: 'quindici', label: 'nome15', ruolo: 'utente'},
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
      }
    },
    { onTop: false,
      buttonAction: {
        text: MyTableActionEnum.EDIT,
        icon: 'pencil',
        class: 'secondary'
      }
    },
    { onTop: false,
      buttonAction: {
        text: MyTableActionEnum.DELETE,
        icon: 'trash3',
        class: 'secondary'
      }
    },
    { onTop: false,
      buttonAction: {
        text: 'Cambia ruolo',
        icon: 'arrow-downward',
        class: 'primary'
      }
    },
  ]
}
