import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurslarpageComponent } from './burslarpage.component';

describe('BurslarpageComponent', () => {
  let component: BurslarpageComponent;
  let fixture: ComponentFixture<BurslarpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurslarpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurslarpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
