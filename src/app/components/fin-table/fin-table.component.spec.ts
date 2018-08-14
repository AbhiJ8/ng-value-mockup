import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinTableComponent } from './fin-table.component';

describe('FinTableComponent', () => {
  let component: FinTableComponent;
  let fixture: ComponentFixture<FinTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
