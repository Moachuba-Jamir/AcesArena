import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileLegendsComponent } from './mobile-legends.component';

describe('MobileLegendsComponent', () => {
  let component: MobileLegendsComponent;
  let fixture: ComponentFixture<MobileLegendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileLegendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileLegendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
