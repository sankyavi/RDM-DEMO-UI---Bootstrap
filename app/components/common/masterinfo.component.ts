import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'masterinfo',
  templateUrl: './app/components/common/masterinfo.component.html'
})
export class MasterinfoComponent implements OnInit {

  @Input() name: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
