import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  isSubmitted: boolean = false;
  feedbackForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: [''],
    message: ['']
  })
  constructor(private fb: FormBuilder) { }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.feedbackForm.value)
  }

}
