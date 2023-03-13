import {MyHeaders} from "./my-headers";
import {Ordinamento} from "./ordinamento";
import {MySearch} from "./my-search";
export interface MyTableConfig {
  headers: MyHeaders[];
  order: Ordinamento;
  search: MySearch;
}
