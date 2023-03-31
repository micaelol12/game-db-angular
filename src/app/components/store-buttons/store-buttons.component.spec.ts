import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreButtonsComponent } from './store-buttons.component';

describe('StoreButtonsComponent', () => {
  let component: StoreButtonsComponent;
  let fixture: ComponentFixture<StoreButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
