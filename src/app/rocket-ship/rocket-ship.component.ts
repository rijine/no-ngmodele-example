import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Standalone } from '../standalone-component';

// @Standalone
@Component({
  selector: 'app-rocket-ship',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rocket-ship.component.html',
  styleUrls: ['./rocket-ship.component.scss']
})
export class RocketShipComponent {

}
