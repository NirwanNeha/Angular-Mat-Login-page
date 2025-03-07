import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router'; // ✅ Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isDarkMode: boolean = false;
  loginError: string = ''; // ✅ For error message

  constructor(private fb: FormBuilder, private router: Router) {} // ✅ Inject Router

  ngOnInit(): void {
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.applyTheme();
  }

  toggleTheme(event: MatSlideToggleChange): void {
    this.isDarkMode = event.checked;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  applyTheme(): void {
    document.body.classList.toggle('dark-theme', this.isDarkMode);
    document.body.classList.toggle('light-theme', !this.isDarkMode);
  }

  onSubmit(): void {
    const { email, password } = this.loginForm.value;
    
    if (email === 'neha' && password === 'test@1234') { // ✅ Hardcoded credentials check
      this.router.navigate(['/dashboard']); // ✅ Redirect to dashboard
      console.log('Login successful');
    } else {
      this.loginError = 'Invalid username or password'; // ✅ Show error message
    }
  }
}
