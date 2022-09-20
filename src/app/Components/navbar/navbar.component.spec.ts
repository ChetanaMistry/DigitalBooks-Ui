import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NAvbarComponent } from './navbar.component';

describe('NAvbarComponent', () => {
  let component: NAvbarComponent;
  let fixture: ComponentFixture<NAvbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NAvbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NAvbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
