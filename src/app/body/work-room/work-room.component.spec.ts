import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRoomComponent } from './work-room.component';

describe('WorkRoomComponent', () => {
  let component: WorkRoomComponent;
  let fixture: ComponentFixture<WorkRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkRoomComponent]
    });
    fixture = TestBed.createComponent(WorkRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
