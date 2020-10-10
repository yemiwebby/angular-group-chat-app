import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupChatViewComponent } from './group-chat-view.component';

describe('GroupChatViewComponent', () => {
  let component: GroupChatViewComponent;
  let fixture: ComponentFixture<GroupChatViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupChatViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupChatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
