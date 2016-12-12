import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-state',
  template: `<span [style.color]="colorState" class="glyphicon glyphicon-record" aria-hidden="true"></span>`
})
export class BaseStateComponent implements OnInit {
    public colorState: string = "green";
    @Input() public date: Date;
    private _previousDate: Date;

    constructor() { }

    ngOnInit() { }

    ngDoCheck() {
        if(this.date != this._previousDate) {
            this.analizeDate();
            this._previousDate = this.date;
        }
    }

    private analizeDate(): void {
        let currentDate = new Date();
        let otherDate = new Date(this.date); 
        let daysDiff = Math.ceil((otherDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
        if(daysDiff > 30) {
            this.colorState = "green";
        }
        else if(daysDiff >= 0) {
            this.colorState = "orange";
        }
        else {
            this.colorState = "red";
        }
    }
}