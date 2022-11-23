import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [CommonModule],
  template: ` <h3>foo works!</h3> `,
  styles: [],
})
export class FooComponent {}
