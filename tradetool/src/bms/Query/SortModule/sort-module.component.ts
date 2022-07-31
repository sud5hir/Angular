import {
  Component, Output, Input,
  EventEmitter
} from '@angular/core';
@Component({
  selector: 'sort-root',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {
  title = 'SortComponent';
  sortConfig: string = "headerSortDown";

  @Input()
  queryData: any = [];

  @Input()
  fielName: string = ''

  @Output("SortedData-Pushed")
  sortEmitter = new EventEmitter<any[]>();

  sortedData: any = [];

  SortQueryData = () => {
    if (this.fielName == 'queryRef') {
      if (this.sortConfig == "headerSortDown") {
        this.sortConfig = "headerSortUp"
        this.sortEmitter.emit((this.queryData.sort((a: any, b: any) => { return b.queryRef - a.queryRef })));
      }
      else {
        this.sortConfig = "headerSortDown"
        this.sortEmitter.emit(this.queryData.sort((a: any, b: any) => { return a.queryRef - b.queryRef }));
      }
    }
    if (this.fielName == 'queryType') {
      if (this.sortConfig == "headerSortDown") {
        this.sortConfig = "headerSortUp"
        this.sortEmitter.emit((this.queryData.sort((a: any, b: any) => this.GetSortOrder(a.queryType, b.queryType, this.sortConfig))));
      }
      else {
        this.sortConfig = "headerSortDown";
        this.sortEmitter.emit(this.queryData.sort((a: any, b: any) => this.GetSortOrder(a.queryType, b.queryType, this.sortConfig)));
      }
    }
    if (this.fielName == 'Status') {
      if (this.sortConfig == "headerSortDown") {
        this.sortConfig = "headerSortUp"
        this.sortEmitter.emit((this.queryData.sort((a: any, b: any) => this.GetSortOrder(a.Status, b.Status, this.sortConfig))));
      }
      else {
        this.sortConfig = "headerSortDown";
        this.sortEmitter.emit(this.queryData.sort((a: any, b: any) => this.GetSortOrder(a.Status, b.Status, this.sortConfig)));
      }
    }
    if (this.fielName == 'RaisedBy') {
      if (this.sortConfig == "headerSortDown") {
        this.sortConfig = "headerSortUp"
        this.sortEmitter.emit((this.queryData.sort((a: any, b: any) => this.GetSortOrder(a.RaisedBy, b.RaisedBy, this.sortConfig))));
      }
      else {
        this.sortConfig = "headerSortDown";
        this.sortEmitter.emit(this.queryData.sort((a: any, b: any) => this.GetSortOrder(a.RaisedBy, b.RaisedBy, this.sortConfig)));
      }
    }
    if (this.fielName == 'RaisedOn') {
      if (this.sortConfig == "headerSortDown") {
        this.sortConfig = "headerSortUp"
        this.sortEmitter.emit((this.queryData.sort((a: any, b: any) => this.GetSortOrder(a.RaisedOn, b.RaisedOn, this.sortConfig))));
      }
      else {
        this.sortConfig = "headerSortDown";
        this.sortEmitter.emit(this.queryData.sort((a: any, b: any) => this.GetSortOrder(a.RaisedOn, b.RaisedOn, this.sortConfig)));
      }
    }
  }

  GetSortOrder = (a: any, b: any, sortType: string) => {
    if (sortType == "headerSortUp") {
      if (a > b) {
        return -1;
      } else if (a < b) {
        return 1;
      }
      return 0;
    }
    else {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    }
  }
}

