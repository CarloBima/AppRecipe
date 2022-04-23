import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCoverComponentComponent } from './recipe-cover.component';

describe('RecipeCoverComponentComponent', () => {
  let component: RecipeCoverComponentComponent;
  let fixture: ComponentFixture<RecipeCoverComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCoverComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCoverComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
