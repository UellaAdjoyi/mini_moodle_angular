import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UeCardComponent } from './ue-card.component';

describe('UeCardComponent', () => {
  let component: UeCardComponent;
  let fixture: ComponentFixture<UeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
