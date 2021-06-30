import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePhoneExtensionComponent } from './create-phone-extension.component';

describe('CreatePhoneExtensionComponent', () => {
  let component: CreatePhoneExtensionComponent;
  let fixture: ComponentFixture<CreatePhoneExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePhoneExtensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePhoneExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
