import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginAction } from '@lib/store/login.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  error?: string
  constructor(private router: Router, private fb: FormBuilder, private store: Store<{ login: { token: string, error: string } }>) {
    store.select('login').subscribe(v => {
      if (v.token) this.router.navigate(['/'])
      else if (v.error) this.error = v.error
    })
  }

  onSubmit(e: Event) {
    e.preventDefault()
    this.store.dispatch(loginAction(this.form.value as { username: string, password: string }))
  }
}
