import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadINComponent } from './head-in.component';

describe('HeadINComponent', () => {
  let component: HeadINComponent;
  let fixture: ComponentFixture<HeadINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadINComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
