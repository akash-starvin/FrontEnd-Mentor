import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipAmountCardComponent } from './tip-amount-card.component';

describe('TipAmountCardComponent', () => {
  let component: TipAmountCardComponent;
  let fixture: ComponentFixture<TipAmountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipAmountCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipAmountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
