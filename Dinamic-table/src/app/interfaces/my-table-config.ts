import {MyHeaders} from "./my-headers";
import {Ordinamento} from "./ordinamento";
import {MySearch} from "./my-search";
import {MyPagination} from "./my-pagination";
export interface MyTableConfig {
  headers: MyHeaders[];
  order: Ordinamento;
  search: MySearch;
  pagination: MyPagination;
}
