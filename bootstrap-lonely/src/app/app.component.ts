import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>Welcome to {{ title }}!</h1>
      <span style="display: block">{{ title }} app is running!</span>
      <div class="top2">
        <img ngSrc="./assets/img/profile.jpg" width="150" height="150" />
      </div>
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
export class AppComponent implements OnInit {
  title = 'bootstrap-lonely';
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

  ngOnInit() {}

  goBack() {
    // window.history.back();
    // this.location.back();
    this.router.navigate(['/']);
  }
}
