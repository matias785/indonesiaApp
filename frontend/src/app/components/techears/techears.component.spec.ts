import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechearsComponent } from './techears.component';

describe('TechearsComponent', () => {
  let component: TechearsComponent;
  let fixture: ComponentFixture<TechearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechearsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
