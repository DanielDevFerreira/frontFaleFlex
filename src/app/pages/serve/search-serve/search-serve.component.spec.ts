import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchServeComponent } from './search-serve.component';

describe('SearchServeComponent', () => {
  let component: SearchServeComponent;
  let fixture: ComponentFixture<SearchServeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchServeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
