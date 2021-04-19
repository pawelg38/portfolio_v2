import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloSectionComponent } from './hello-section.component';

describe('HelloSectionComponent', () => {
  let component: HelloSectionComponent;
  let fixture: ComponentFixture<HelloSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
