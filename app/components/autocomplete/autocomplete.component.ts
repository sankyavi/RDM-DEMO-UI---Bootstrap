import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * @description The autocomplete functionalilty for masters search box
 * @author Avinash 
 * @export AutocompleteComponent
 * @class AutocompleteComponent
 */

@Component({
    selector: 'autocomplete',
    templateUrl: './app/components/autocomplete/autocomplete.component.html',
    styles: [`
        .autocomplete {
            padding: 10px;
            margin : 10px;
        }
        span {
			cursor: pointer;
			cursor: hand;
		}
		.lefty {
			padding-left : 10px;
		}
    `]
})


export class AutocompleteComponent implements OnInit {
    query: string = '';
    masters1: string[] = [];
    filteredList: string[] = [];

    constructor(private router: Router) { }

    ngOnInit() {
        this.masters1 = Object.keys(localStorage);
    }

    filter() {
        if (this.query !== "") {
            this.filteredList = this.masters1.filter(function (el: string) {
                //return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                // use above if polyfill required for below
                return el.toLowerCase().includes(this.query.toLowerCase());
            }.bind(this));
        } else {
            this.filteredList = [];
        }
    }


    select(item: string) {
        this.query = item;
        this.filteredList = [];
    }

    onClick() {
        var mastertable = this.query.split(' ').join('');
        console.log("autocomplete  :: mastertable : " + mastertable);
        this.router.navigate(['reference-details', mastertable]);
    }
}