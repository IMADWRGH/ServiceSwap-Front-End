import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  signupForm: FormGroup;
  ngOnInit(): void {
  }
  constructor(public fb: FormBuilder, public authServices: AuthServiceService, public router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required],
    })
  }
  registerUser() {
    this.authServices.singUp(this.signupForm.value).subscribe(
      (res) => {
        if (res.result) {
          this.signupForm.reset();
          this.router.navigate(['login'])
        }
      }
    )
  }

}
