import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPhoneExtensionComponent } from './search-phone-extension.component';

describe('SearchPhoneExtensionComponent', () => {
  let component: SearchPhoneExtensionComponent;
  let fixture: ComponentFixture<SearchPhoneExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPhoneExtensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPhoneExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
