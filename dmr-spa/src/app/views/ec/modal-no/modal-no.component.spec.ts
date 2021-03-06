import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalNoComponent } from './modal-no.component';

describe('ModalNoComponent', () => {
  let component: ModalNoComponent;
  let fixture: ComponentFixture<ModalNoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
