import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsMenuComponent } from './components-menu.component';

describe('ComponentsMenuComponent', () => {
  let component: ComponentsMenuComponent;
  let fixture: ComponentFixture<ComponentsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
