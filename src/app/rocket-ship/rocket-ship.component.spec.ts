import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketShipComponent } from './rocket-ship.component';

describe('RocketShipComponent', () => {
  let component: RocketShipComponent;
  let fixture: ComponentFixture<RocketShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RocketShipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocketShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
