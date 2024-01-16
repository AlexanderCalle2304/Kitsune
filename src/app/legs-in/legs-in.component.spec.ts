import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegsInComponent } from './legs-in.component';

describe('LegsInComponent', () => {
  let component: LegsInComponent;
  let fixture: ComponentFixture<LegsInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegsInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegsInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
