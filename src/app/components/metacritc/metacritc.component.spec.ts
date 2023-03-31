import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetacritcComponent } from './metacritc.component';

describe('MetacritcComponent', () => {
  let component: MetacritcComponent;
  let fixture: ComponentFixture<MetacritcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetacritcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetacritcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
