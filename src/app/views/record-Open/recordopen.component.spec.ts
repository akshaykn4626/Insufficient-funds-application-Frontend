import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordOpenComponent } from './recordopen.component';

describe('CreateuserComponent', () => {
  let component: RecordOpenComponent;
  let fixture: ComponentFixture<RecordOpenComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
