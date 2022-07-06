import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementMenuComponent } from './reimbursement-menu.component';

describe('ReimbursementMenuComponent', () => {
  let component: ReimbursementMenuComponent;
  let fixture: ComponentFixture<ReimbursementMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
