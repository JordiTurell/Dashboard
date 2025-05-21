import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsMenuComponent } from './forms-menu.component';

describe('FormsMenuComponent', () => {
  let component: FormsMenuComponent;
  let fixture: ComponentFixture<FormsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
