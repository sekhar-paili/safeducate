import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SHARED } from './Shared/shared';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SHARED],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
