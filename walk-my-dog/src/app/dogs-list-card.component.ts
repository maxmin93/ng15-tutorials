import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dog } from './dogs.service';
// routerLink, router-outlet 등의 라우팅 관련 디렉티브를 사용하기 위해
import { RouterModule, Router } from '@angular/router';
// import { routes } from './app-routing.module';

@Component({
  selector: 'app-dogs-list-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="pet-card">
      <img
        class="pet-img"
        src="{{ dog.photoUrl }}"
        alt="Photo of {{ dog.name }}"
      />
      <p class="pet-headline">
        Meet <span class="pet-name">{{ dog.name }}</span>
      </p>
      <p class="pet-description">
        <span class="pet-name">{{ dog.ownerName }}</span> wants you to know this
        about {{ dog.name }}:
        {{ dog.description }}
      </p>
      <p class="pet-learn-more">
        <!-- <a href="/details/{{ index }}">Learn More</a> -->
        <!-- <a routerLink="" (click)="detailView(index)">Learn More</a> -->
        <a routerLink="/details/{{ index }}">Learn More</a>
      </p>
      <article></article>
    </article>
  `,
  styles: [
    `
      .pet-card {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
          rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        width: 300px;
      }
      .pet-img {
        border-radius: 10px 10px 0 0;
        width: 300px;
      }
      .pet-name {
        font-weight: bolder;
      }
      .pet-description,
      .pet-headline,
      .pet-learn-more {
        padding: 10px;
      }
      .pet-headline {
        font-size: 18pt;
      }
    `,
  ],
})
export class DogsListCardComponent implements OnInit {
  @Input() dog!: Dog;
  @Input() index!: Number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  detailView(index: Number) {
    console.log('goto: /details/' + index);
    this.router.navigate(['/details', index]);
  }
}
