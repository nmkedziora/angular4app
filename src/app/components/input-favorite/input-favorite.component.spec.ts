import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFavoriteComponent } from './input-favorite.component';

describe('InputFavoriteComponent', () => {
  let component: InputFavoriteComponent;
  let fixture: ComponentFixture<InputFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
