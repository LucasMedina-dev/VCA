import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcaTitleComponent } from './vca-title.component';

describe('VcaTitleComponent', () => {
  let component: VcaTitleComponent;
  let fixture: ComponentFixture<VcaTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcaTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VcaTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
