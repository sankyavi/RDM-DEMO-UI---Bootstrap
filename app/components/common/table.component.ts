import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './app/components/common/table.component.html'
})
export class TableComponent implements OnInit {
  @Input() linkflag: boolean;
  @Input() references: string[];
  @Input() master_type: string;

  @Output() goto = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  gotos(id: number) {
        this.goto.emit(id);
    }

}
