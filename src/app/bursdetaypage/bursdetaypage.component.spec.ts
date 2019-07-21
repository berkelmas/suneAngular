import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BursdetaypageComponent } from './bursdetaypage.component';

describe('BursdetaypageComponent', () => {
  let component: BursdetaypageComponent;
  let fixture: ComponentFixture<BursdetaypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BursdetaypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BursdetaypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
