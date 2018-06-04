import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../services/email/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  contact = {
    name: '',
    email: '',
    subject: '',
    message: 'Hi Sam!'
  }

  submitted = false;
  validFormState = true;

  valid(f: NgForm) {
    this.validFormState = f.valid;

    return f.valid;
  }

  onSubmit(f) { 

    console.log('submitting contact', f);

    this.submitted = true; 
  
    if(!this.valid(f)) 
    return;
    
    let name = f.value.name;
    let email = f.value.email;
    let subject = f.value.subject;
    let message = f.value.message;

    // this.emailService.sendEmail(name, email, subject, message).subscribe(data => {
    //   console.log('email sent????', data);
    // })
  }

}
