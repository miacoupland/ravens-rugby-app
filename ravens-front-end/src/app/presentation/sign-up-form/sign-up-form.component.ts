import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit {
  public signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      teamName: new FormControl(null, Validators.required),
      secretaryName: new FormControl(null, Validators.required),
      secretaryEmail: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      secretaryPhone: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]{11}'),
      ]),
      fields: this.formBuilder.array([this.createRow()]),
    });

    for (let i = 0; i < 10; i++) {
      this.addRow();
    }
  }

  public ngOnInit(): void {}

  public createRow(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      pronouns: ['', Validators.required],
      dietary: [''],
      allergies: [''],
    });
  }

  get fieldControls() {
    return (this.signupForm.get('fields') as FormArray).controls;
  }

  addRow() {
    const fields = this.signupForm.get('fields') as FormArray;
    fields.push(this.createRow());
  }

  removeRow(index: number) {
    const rows = this.signupForm.get('fields') as FormArray;
    rows.removeAt(index);
  }

  public onSubmit() {
    if (this.signupForm.valid) {
      console.log('valid');
    }
  }
}
