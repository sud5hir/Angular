import { Component } from '@angular/core';
import { QuerydataserviceService } from './querydataservice.service';
@Component({
  selector: 'query-root',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})

export class QueryComponent {
  title = 'QueryCompnent';
  columnNames: any = ['Query Reference', 'Query Type', 'Raised By', 'Raised On', 'Status'];
  queryData: any = [];
  tempQueryData: any = [];
  regex: any = /^[A-Za-z0-9 ]+$/;

  constructor(private _querydataserviceService: QuerydataserviceService) {
    console.log("constructor");

  }
  ngOnInit() {
    console.log("ngOnInit");
    // this._querydataserviceService.GetQueryData().subscribe((data: any) => {
    //   console.log(data);
    //   this.queryData = data;
    // })
    //  this.queryData = QueryData;
    // this.tempQueryData = QueryData.slice();
    // if (QueryData.length > 0) {
    //   if (this.columnNames.length == 0) {
    //     // this.columnNames = Object.keys(QueryData[0]);
    //   }
    // }
    console.log(this.regex)
  }


  // SearchedData(queryData: any) {
  //   this.queryData = new Array<any>()
  //   console.log("SearchedData1 queryData.slice()1", queryData);
  //   this.queryData = queryData;
  //   console.log("SearchedData1 queryData.slice()", this.queryData);
  // }

  // SavedData(queryData: string) {
  //   console.log(queryData);
  //   if (queryData === 'Success') {
  //     this.GetData();
  //   }
  // }
  // SortData(queryData: any) {
  //   this.queryData = queryData.slice();
  // }

  // GetData() {
  //   this._querydataserviceService.GetQueryData().subscribe((data: any) => {
  //     console.log(data);
  //     this.queryData = data;
  //   })
  //}

}