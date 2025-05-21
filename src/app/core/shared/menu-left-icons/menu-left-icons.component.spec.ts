import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLeftIconsComponent } from './menu-left-icons.component';

describe('MenuLeftIconsComponent', () => {
  let component: MenuLeftIconsComponent;
  let fixture: ComponentFixture<MenuLeftIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLeftIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLeftIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
