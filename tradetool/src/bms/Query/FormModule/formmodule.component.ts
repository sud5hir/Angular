
import {
  Component, Output, Input,
  EventEmitter
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/bms/services/dataservice';
import { FormRefModel } from 'src/bms/Query/FormModule/FormRefModel';

@Component({
  selector: 'query-form',
  templateUrl: './formmodule.component.html',
  styleUrls: ['./formmodule.component.css']
})
export class FormComponent {
  title = 'FormComponent';
  formRefModel: FormRefModel = new FormRefModel(this.fb);
  constructor(private fb: FormBuilder, private _dataService: DataService) {
  }

  queryTempData: string = "";
  @Output("SavedData-Pushed")
  nameEmitter = new EventEmitter<string>();
  onSubmit() {
    //  console.log("Login");
    let queryData = {
      'QueryRef': this.formRefModel.queryRef,
      'QueryType': this.formRefModel.queryType,
      'RaisedBy': this.formRefModel.raisedBy,
      'RaisedOn': this.formRefModel.raisedOn,
      'Status': this.formRefModel.status,
    }
    this._dataService.createQueries(queryData).subscribe((data: any) => {
      this.queryTempData = "Success"
      this.nameEmitter.emit("Success");
    },
      (err) => { this.nameEmitter.emit('Error'); });
    this.formRefModel.queryRef = '';
    this.formRefModel.queryType = ''
    this.formRefModel.raisedBy = ''
    this.formRefModel.raisedOn = ''
    this.formRefModel.status = ''
  }
}
