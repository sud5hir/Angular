import {
  Component, Input, Output,
  EventEmitter, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy, AfterViewChecked, AfterViewInit
} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }
  @Input()
  count: number = 0;

  @Input()
  courses: any;

  @Output() msgEvent = new EventEmitter<any>();

  //Called only once for initializtion purpose
  ngOnInit(): void {
    console.log("ngOnInit", this.count);
  }

  //fired on @Input Bound property
  ngOnChanges() {
    console.log("ngOnChanges", this.count);
  }
  // it's getting fired on button clicked
  ngDoCheck() {
    console.log("ngDoCheck", this.count);
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit", this.count);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked", this.count);
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit", this.count);
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked", this.count);
  }
  //ROuter to another comp
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }


  sendMsg() {
    console.log("sendMsg");
    this.msgEvent.emit("Message Hello From Child");
  }


}
