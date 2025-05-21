import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypesMenuComponent } from './prototypes-menu.component';

describe('PrototypesMenuComponent', () => {
  let component: PrototypesMenuComponent;
  let fixture: ComponentFixture<PrototypesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrototypesMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrototypesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
