import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/retry';

import { RefService } from '/app/services/ref.service';
import { LocalStorageService } from '/app/services/localstorage.service';


/**
 * @description This will load the references and aloow editing and adding new references
 * @author Avinash
 * @export RefTableComponent
 * @class RefTableComponent
 */
@Component({
  templateUrl: './app/components/ref/reftable.component.html',
  styles: [`
		a:first-of-type {
			padding-left: 15px;
		}
		a {
			cursor: pointer;
			cursor: hand;
		}
    .lefty {
			text-align : left;
			padding-left : 15px;
		}
    .pad {
			padding : 4px;
		}
    .bringdown {
			padding-top : 5px;
		}
    .iconshift {
			margin-right: 10px;
		}
    .nostyle {
    text-decoration: none;
    color: inherit;
    }
    .card {
      padding : 5px 10px;
      background-color: #FCFCFC;
    }
    .editmaster { 
      margin-top:10px;
    }
    .legendary {
      width:230px;
      background-color: #eceeef;
    }
	`]
})

export class RefTableComponent {

  private id: any;
  private id2: any;
  private master_name: string;
  private master_desc: string;

  private master_type: string;
  private link: any = {};
  private linktype: string;
  private linkflag: boolean;
  private linkvalues: string[];

  private references: string[];
  private noofrecords: number;

  private firstpage: boolean = true;
  private lastpage: boolean = false;

  constructor(private _routeParams: ActivatedRoute, private _refService: RefService,
    private _localStorageService: LocalStorageService) { }

  private ngOnInit() {
    this._routeParams.params
      .subscribe(
      params => {
        //params => params['id']
        this.id = params['id'];
        this.id2 = params['id2'];
        console.info("params1"+this.id);
      console.info("params1"+this.id2);
      }
      )
      // .switchMap(id => this._refService.getData(id))
      // .retry(2)
      // .subscribe(
      // data => {
      //   this.master_name = data.name;
      //   this.link = data.link;
      //   this.getDesc()
      //   this.references = data.references;
      //   this.noofrecords = data.totalreferences;
      // },
      // err => { console.log('err occured' + err) },
      // () => { console.log('done' + this.id2) }
      // )
      console.info("params1"+this.id);
      console.info("params1"+this.id2);
      this._refService.getData(this.id)
      .retry(2)
      .subscribe(
        data => {
          this.master_name = data.name;
          this.link = data.link;
          this.getDesc()
          this.references = data.references;
          this.noofrecords = data.totalreferences;
        },
        err => { console.log('err occured' + err) },
        () => { console.log('done' + this.id2) }
      )
  }

  // **IMP **no need to unsubscribe because it will be auto garbage collected 
  // including the observable on destroying component 
  // private ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

  getDesc() {
    let arraytemp: string[] = this.master_name.split(' ');
    this.master_type = arraytemp[0];


    this.master_desc = this._localStorageService.get(this.master_name);

    if (this.link === undefined) {
      this.linkflag = false;
    } else {
      this.linkflag = true;
      this.linktype = this.link.linkType;
      this.linkvalues = this.link.values;
    }


  }

  showid(num: number) {
    var keys: string[] = this.generateKeys(this.references[num]);
    var values: string[] = this.generateArray(this.references[num]);
    alert("This will open edit Modal for " + keys[0] + ":" + values[0]);
  }


  generateArray(obj) {
    return Object.keys(obj).map((key) => {
      return obj[key];
    });
  }

  generateKeys(obj) {
    return Object.keys(obj).map((key) => { return key });
  }

  change() {
    this.linkflag = false;
  }
}