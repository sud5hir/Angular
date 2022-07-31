import {
  Component, Output, Input,
  EventEmitter
} from '@angular/core';
import { DataService } from 'src/bms/services/dataservice';


@Component({
  selector: 'search-root',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  title = 'SearchComponent';
  constructor(private _dataService: DataService) {
    console.log("constructor");
  }
  @Input()
  queryData: any[] = [];
  queryTempData: any[] = [];

  @Output("SearcheddData-Pushed")
  nameEmitter = new EventEmitter<any[]>();

  filteredQueryData: any[] = [];
  inputText: string = '';


  SearchQuery() {
    this.filteredQueryData = new Array<any>();
    if (this.inputText != '') {
      this._dataService.GetQueryDataByRefId(this.inputText)
        .subscribe((data: any) => {
          this.filteredQueryData.push(data);
        },
          err => {
            console.log(err)
          }
        );
      console.log("this.filteredQueryData", this.filteredQueryData);
      this.nameEmitter.emit(this.filteredQueryData);
    }
    else {
      this._dataService.GetQueryData()
        .subscribe((data: any) => {
          this.queryTempData.push(data);
        },
          err => {
            console.log(err)
          });

      this.nameEmitter.emit(this.queryTempData);
    }
  }

  performSearch() {
    this.SearchQuery();
  }

  // ngOnInit() {
  //   console.log("ngOnInit");
  // }

  // ngOnChanges() {
  //   console.log("ngOnChanges");
  // }

  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit");
  // }

  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit");
  // }

  // ngDoCheck() {
  //   console.log("ngDoCheck");
  // }

  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked");
  // }

  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked");
  // }
}


