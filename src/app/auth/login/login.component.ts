import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<void>();
  public form: FormGroup;
  public flatlogicEmail = 'admin@flatlogic.com';
  public flatlogicPassword = 'admin';

  public ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(this.flatlogicEmail, [Validators.required, Validators.email]),
      password: new FormControl(this.flatlogicPassword, [Validators.required])
    });
  }

  public login(): void {
    if (this.form.valid) {
      this.sendLoginForm.emit();
    }
  }
}
