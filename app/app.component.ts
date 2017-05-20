import { Component } from '@angular/core';
import { Router} from '@angular/router';

/**
 * @author Avinash 
 * @description Root Component
 * @export AppComponent
 * @class AppComponent
 */

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styles: [`
        // .padit {
        //     padding: 10px;
        // }
    //     main {
    //     padding-left: 260px;
    //   }
    //    #aside {
    //     color:cadetblue;
    //   }

        // aside, main {
        //   height:100vh;
        // }
    `]
})
export class AppComponent {
    title = "reference Table managmanent App";

    constructor(private router: Router) { }

    onClick4() {
        this.router.navigate(['dashboard']);
    }
}
