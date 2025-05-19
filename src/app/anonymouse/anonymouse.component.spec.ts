import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymouseComponent } from './anonymouse.component';

describe('AnonymouseComponent', () => {
  let component: AnonymouseComponent;
  let fixture: ComponentFixture<AnonymouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnonymouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnonymouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
