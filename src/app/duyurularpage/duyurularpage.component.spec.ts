import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyurularpageComponent } from './duyurularpage.component';

describe('DuyurularpageComponent', () => {
  let component: DuyurularpageComponent;
  let fixture: ComponentFixture<DuyurularpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyurularpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyurularpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
