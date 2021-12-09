import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InferComponent } from './infer.component';

describe('InferComponent', () => {
  let component: InferComponent;
  let fixture: ComponentFixture<InferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
