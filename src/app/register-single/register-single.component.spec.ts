import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSingleComponent } from './register-single.component';

describe('RegisterSingleComponent', () => {
  let component: RegisterSingleComponent;
  let fixture: ComponentFixture<RegisterSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
