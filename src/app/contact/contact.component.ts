import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailForm: FormGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      message: ['', Validators.required]
    });;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
  }

  onSubmit() {
    
    
    this.submitted = true;    
if (this.emailForm.invalid) {
      // this.submitted = false;  
      return;
    }
    this.success = true;
}

}
