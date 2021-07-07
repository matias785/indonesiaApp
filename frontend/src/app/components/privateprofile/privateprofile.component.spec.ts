import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateprofileComponent } from './privateprofile.component';

describe('PrivateprofileComponent', () => {
  let component: PrivateprofileComponent;
  let fixture: ComponentFixture<PrivateprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
