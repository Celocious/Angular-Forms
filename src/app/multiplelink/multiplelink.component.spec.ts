import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplelinkComponent } from './multiplelink.component';

describe('MultiplelinkComponent', () => {
  let component: MultiplelinkComponent;
  let fixture: ComponentFixture<MultiplelinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplelinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
