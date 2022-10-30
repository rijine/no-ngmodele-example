import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RocketShipComponent } from './rocket-ship/rocket-ship.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RocketShipComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'no-ngmodule-sample';
}
