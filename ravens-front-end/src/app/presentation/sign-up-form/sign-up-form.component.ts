import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  public signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      nameField: ['', Validators.required],
      pronounsField: ['', Validators.required],
      dietaryField: [''],
      allergiesField: [''],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('valid');
    }
  }
}
