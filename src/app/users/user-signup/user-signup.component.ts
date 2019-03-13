import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'
import { EmailValidators } from 'src/app/shared/email-validators';
import { User } from '../user';



@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  userSignupForm: FormGroup;
  user = new User();

  emailMessage: string;
  private validationMessages = {
    required: "Please enter an email address",
    email: "Please enter a valid email",
    minLength: "Must be more than 3 characters"
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userSignupForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ["", [Validators.required, Validators.email]],
        confirmEmail: ["", [Validators.required, Validators.email]],
      }, { validator: EmailValidators.emailMatch }),
      password: ["", [Validators.required]]
    })

    const emailControl = this.userSignupForm.get('emailGroup.email');
    emailControl.valueChanges.pipe(debounceTime(1000))
      .subscribe(value => this.setMessage(emailControl));
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.dirty || c.touched) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(
        key => this.emailMessage += this.validationMessages[key]).join('');
    }
  }
}
