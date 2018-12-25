import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividuationComponent } from './individuation.component';

describe('IndividuationComponent', () => {
  let component: IndividuationComponent;
  let fixture: ComponentFixture<IndividuationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividuationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
