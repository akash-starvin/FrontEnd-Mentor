import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PledgeCardComponent } from './pledge-card.component';

describe('PledgeCardComponent', () => {
  let component: PledgeCardComponent;
  let fixture: ComponentFixture<PledgeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PledgeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PledgeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
