import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMoivesComponent } from './all-moives.component';

describe('AllMoivesComponent', () => {
  let component: AllMoivesComponent;
  let fixture: ComponentFixture<AllMoivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMoivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMoivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
