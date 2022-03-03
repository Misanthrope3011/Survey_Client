import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsDatabaseComponent } from './questions-database.component';

describe('QuestionsDatabaseComponent', () => {
  let component: QuestionsDatabaseComponent;
  let fixture: ComponentFixture<QuestionsDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
