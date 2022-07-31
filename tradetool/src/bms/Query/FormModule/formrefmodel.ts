import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

export class FormRefModel {

  queryRef: string = "";;
  queryType: string = "";
  raisedBy: string = "";
  raisedOn: string = "";
  status: string = "";
  formRefGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    //creates the structure
    // let _bulider = new FormBuilder();
    //create form group
    this.formRefGroup = fb.group({});
    //then add validtors
    this.formRefGroup.addControl('queryRefControl', new FormControl('', Validators.required))
    this.formRefGroup.addControl('queryTypeControl', new FormControl('', Validators.required))
    this.formRefGroup.addControl('raisedByControl', new FormControl('', Validators.required))
    this.formRefGroup.addControl('raisedOnControl', new FormControl('', Validators.required))
    this.formRefGroup.addControl('statusControl', new FormControl('', Validators.required))
    let validators = [];
    validators.push(Validators.required);
    validators.push(Validators.pattern("^[A-Z]{1,2}$"));
    // this.formRefGroup.addControl('queryTypeControl', new FormControl('', Validators.required))
    // this.formRefGroup.addControl('raisedByControl', new FormControl('', Validators.required))

    // this.formRefGroup.addControl('aliases',
    //     // this.fb.array([
    //     //     this.fb.control('')
    //     // ]));
  }

  get aliases() {
    return this.formRefGroup.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}





