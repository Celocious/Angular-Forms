import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenameComponent } from './imagename.component';

describe('ImagenameComponent', () => {
  let component: ImagenameComponent;
  let fixture: ComponentFixture<ImagenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
