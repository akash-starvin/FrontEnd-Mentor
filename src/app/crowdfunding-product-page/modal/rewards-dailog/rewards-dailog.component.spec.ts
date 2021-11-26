import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsDailogComponent } from './rewards-dailog.component';

describe('RewardsDailogComponent', () => {
  let component: RewardsDailogComponent;
  let fixture: ComponentFixture<RewardsDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardsDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardsDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
