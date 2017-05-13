import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'vladi',
    template: `
    <h1>Hello from vladi</h1>    
  `
})
export class VladiComponent implements OnInit {
    public localState: any;

    constructor(public route: ActivatedRoute) { }
    public ngOnInit(): void {
        this.route
            .data
            .subscribe((data: any) => {
                /**
                 * Your resolved data from route.
                 */
                this.localState = data.yourData;
            });
    }



}
