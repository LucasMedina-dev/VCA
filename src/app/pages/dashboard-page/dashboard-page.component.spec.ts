import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupPageComponent } from './dashboard-page.component';

describe('PickupPageComponent', () => {
  let component: PickupPageComponent;
  let fixture: ComponentFixture<PickupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickupPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
