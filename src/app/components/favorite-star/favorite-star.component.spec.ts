import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteStarComponent } from './favorite-star.component';

describe('FavoriteStarComponent', () => {
  let component: FavoriteStarComponent;
  let fixture: ComponentFixture<FavoriteStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
