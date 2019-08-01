import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularsWorksComponent } from './particulars-works.component';

describe('ParticularsWorksComponent', () => {
  let component: ParticularsWorksComponent;
  let fixture: ComponentFixture<ParticularsWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticularsWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularsWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
