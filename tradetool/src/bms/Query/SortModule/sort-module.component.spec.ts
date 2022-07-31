import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortModuleComponent } from './sort-module.component';

describe('SortModuleComponent', () => {
  let component: SortModuleComponent;
  let fixture: ComponentFixture<SortModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
