import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleComponent } from './multiple.component';

describe('UsersComponent', () => {
  let component: MultipleComponent;
  let fixture: ComponentFixture<MultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
