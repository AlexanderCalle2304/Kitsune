import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyINComponent } from './body-in.component';

describe('BodyINComponent', () => {
  let component: BodyINComponent;
  let fixture: ComponentFixture<BodyINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyINComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
