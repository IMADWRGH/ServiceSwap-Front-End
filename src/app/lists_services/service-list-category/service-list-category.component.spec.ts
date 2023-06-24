import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceListCategoryComponent } from './service-list-category.component';

describe('ServiceListCategoryComponent', () => {
  let component: ServiceListCategoryComponent;
  let fixture: ComponentFixture<ServiceListCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceListCategoryComponent]
    });
    fixture = TestBed.createComponent(ServiceListCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
