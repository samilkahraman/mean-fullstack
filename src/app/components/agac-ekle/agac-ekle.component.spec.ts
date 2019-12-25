import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgacEkleComponent } from './agac-ekle.component';

describe('AgacEkleComponent', () => {
  let component: AgacEkleComponent;
  let fixture: ComponentFixture<AgacEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgacEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgacEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
