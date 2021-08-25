import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '@auth0/auth0-spa-js';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  readonly user$: Observable<User | null | undefined>;

  constructor(private readonly auth: AuthService) {
    this.user$ = auth.user$;
  }

  logOut() {
    this.auth.logout();
  }
}
