import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltyCategoryComponent } from './salty-category.component';

describe('SaltyCategoryComponent', () => {
  let component: SaltyCategoryComponent;
  let fixture: ComponentFixture<SaltyCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaltyCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaltyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
