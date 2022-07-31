import { Component } from '@angular/core';

const Max_Limit: number = 10;
const Min_Limit: number = 0;

@Component({
  templateUrl: './Countermodule.component.html',
  styleUrls: ['./Countermodule.component.css']
})
export class CountermoduleComponent {
  count: number = 5;
  title = 'CounterComponent';

  constructor() {

    // console.log("constructor");
    // var str: any = "Apples are round, and Apples are Juicy.";
    // console.log(str.toUpperCase());
    // console.log(str.toUpper());

    //  var str1: object = "Apples are round, and Apples are Juicy.";
    // console.log(str1.toUpperCase());
    // console.log(str1.toUpper());
    //  var str2: string = "Apples are round, and Apples are Juicy.";
    //  console.log(str2.toUpperCase());
    // console.log(str2.toUpper());

  }
  // ngOnInit() {
  //   console.log("ngOnInit");
  // }
  // ngOnChanges() {
  //   console.log("ngOnChanges");
  // }
  // ngDoCheck() {
  //   console.log("ngDoCheck");
  // }
  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit");
  // }
  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked");
  // }
  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit");
  // }
  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked");
  // }
  // ngOnDestroy() {
  //   console.log("ngOnDestroy");
  // }

  IncrementOrDecrementCounter = (indicator: number) => {
    console.log("IncrementOrDecrementCounter");
    switch (indicator) {
      case 1:
        if (this.count <= Max_Limit - 1) {
          this.count = +this.count + 1;
        }
        break;
      case 0:
        if (this.count != Min_Limit) {
          this.count = +this.count - 1;
        }
        break;
    }
  }

  receiveMsg(event: any) {
    console.log("receiveMsg")
    console.log(event);
  }
}
