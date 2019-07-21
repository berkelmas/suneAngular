import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtolyelerpageComponent } from './atolyelerpage.component';

describe('AtolyelerpageComponent', () => {
  let component: AtolyelerpageComponent;
  let fixture: ComponentFixture<AtolyelerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtolyelerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtolyelerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
