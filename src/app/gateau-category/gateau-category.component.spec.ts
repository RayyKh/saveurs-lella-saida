import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateauCategoryComponent } from './gateau-category.component';

describe('GateauCategoryComponent', () => {
  let component: GateauCategoryComponent;
  let fixture: ComponentFixture<GateauCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GateauCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GateauCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
