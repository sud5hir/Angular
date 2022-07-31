import { DataService } from "../services/dataservice";
import { QueryData } from "./QueryData";

export class QueryComponent {
  title = 'QueryCompnent';
  columnNames: any = ['Query Reference', 'Query Type', 'Raised By', 'Raised On', 'Status'];
  queryData: any = [];
  tempQueryData: any = [];
  regex: any = /^[A-Za-z0-9 ]+$/;

  constructor(private _dataService: DataService) {
    console.log("constructor");

  }
  ngOnInit() {
    console.log("ngOnInit");
    this._dataService.GetQueryData().subscribe((data: any) => {
      console.log(data);
      this.queryData = data;
    })
    //  this.queryData = QueryData;
    this.tempQueryData = QueryData.slice();
    if (QueryData.length > 0) {
      if (this.columnNames.length == 0) {
        // this.columnNames = Object.keys(QueryData[0]);
      }
    }
    console.log(this.regex)
  }

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
  SearchedData(queryData: any) {
    this.queryData = new Array<any>()
    console.log("SearchedData1 queryData.slice()1", queryData);
    this.queryData = queryData;
    console.log("SearchedData1 queryData.slice()", this.queryData);
  }

  SavedData(queryData: string) {
    console.log(queryData);
    if (queryData === 'Success') {
      this.GetData();
    }
  }
  SortData(queryData: any) {
    this.queryData = queryData.slice();
  }

  GetData() {
    this._dataService.GetQueryData().subscribe((data: any) => {
      console.log(data);
      this.queryData = data;
    })
  }

}
