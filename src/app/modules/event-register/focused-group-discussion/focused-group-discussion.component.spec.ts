import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusedGroupDiscussionComponent } from './focused-group-discussion.component';

describe('FocusedGroupDiscussionComponent', () => {
  let component: FocusedGroupDiscussionComponent;
  let fixture: ComponentFixture<FocusedGroupDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusedGroupDiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusedGroupDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
