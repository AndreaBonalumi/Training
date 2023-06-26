import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  IterableDiffer,
  IterableDiffers,
  OnInit,
  Output,
} from '@angular/core';
import { MyHeaders } from '../../entities/my-headers';
import { MyTableConfig } from '../../entities/my-table-config';

@Component({
  selector: 'app-table-custom',
  templateUrl: './table-custom.component.html',
  styleUrls: ['./table-custom.component.css'],
})
export class TableCustomComponent implements OnInit, AfterContentChecked {
  ngAfterContentChecked(): void {}

  ngOnInit(): void {}
}
