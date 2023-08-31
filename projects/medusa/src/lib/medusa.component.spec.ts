import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedusaComponent } from './medusa.component';

describe('MedusaComponent', () => {
  let component: MedusaComponent;
  let fixture: ComponentFixture<MedusaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedusaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedusaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
