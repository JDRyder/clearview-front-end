import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  submitted: boolean = false;
  success: boolean = false;
  alerts: Alert[] = ALERTS;
  successalert: Alert = {
    type:'success',
    message:'Thank you for your email. Someone will be in touch soon.'
  };
  emailForm: FormGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      message: ['', Validators.required]
    });
  
  constructor(private formBuilder: FormBuilder) { 
    // this.reset();
  }

  ngOnInit() { }

  onSubmit() {
    this.submitted = true;    
    if (this.emailForm.invalid) {
      // this.submitted = false;  
      return;
    }
    this.success = true;
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
