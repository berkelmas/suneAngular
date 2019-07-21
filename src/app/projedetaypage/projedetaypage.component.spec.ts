import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjedetaypageComponent } from './projedetaypage.component';

describe('ProjedetaypageComponent', () => {
  let component: ProjedetaypageComponent;
  let fixture: ComponentFixture<ProjedetaypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjedetaypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjedetaypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
