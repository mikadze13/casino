import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamblingGameComponent } from './gambling-game.component';

describe('GamblingGameComponent', () => {
  let component: GamblingGameComponent;
  let fixture: ComponentFixture<GamblingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamblingGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamblingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
