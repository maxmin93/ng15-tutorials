import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>Welcome to {{ title }}!</h1>
      <span style="display: block">{{ title }} app is running!</span>
    </div>
    <!-- <app-foo></app-foo> -->
    <p>{{ route }}</p>
    <a *ngIf="route == 'Home'" routerLink="/foo">Foo</a>
    <a *ngIf="route != 'Home'" href="javascript:void(0)" (click)="goBack()">
      🔙 &nbsp; Back
    </a>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'bootstrap-normal';
  route: string = '';

  constructor(private location: Location, private router: Router) {
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.route = location.path();
      } else {
        this.route = 'Home';
      }
    });
  }

  goBack() {
    // window.history.back();
    // this.location.back();
    this.router.navigate(['/']);
  }
}
