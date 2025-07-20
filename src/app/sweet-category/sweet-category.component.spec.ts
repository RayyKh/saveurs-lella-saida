import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetCategoryComponent } from './sweet-category.component';

describe('SweetCategoryComponent', () => {
  let component: SweetCategoryComponent;
  let fixture: ComponentFixture<SweetCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweetCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweetCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
