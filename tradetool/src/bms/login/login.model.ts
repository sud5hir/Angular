import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

export class FormRefModel {
    userName: string = "";
    password: string = "";

    formRefGroup: FormGroup;

    constructor(private fb: FormBuilder) {
        //creates the structure 
        // let _bulider = new FormBuilder();
        //create form group
        this.formRefGroup = fb.group({});
        //then add validtors
        this.formRefGroup.addControl('userNameControl', new FormControl('', Validators.required))
        this.formRefGroup.addControl('passwordControl', new FormControl('', Validators.required))

        // this.formRefGroup.addControl('queryTypeControl', new FormControl('', Validators.required))
        // this.formRefGroup.addControl('raisedByControl', new FormControl('', Validators.required))

        // this.formRefGroup.addControl('aliases',
        //     // this.fb.array([
        //     //     this.fb.control('')
        //     // ]));
    }

}