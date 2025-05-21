import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuLeftComponent } from './submenu-left.component';

describe('SubmenuLeftComponent', () => {
  let component: SubmenuLeftComponent;
  let fixture: ComponentFixture<SubmenuLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmenuLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmenuLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
