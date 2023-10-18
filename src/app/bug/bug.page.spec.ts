import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BugPage } from './bug.page';

describe('BugPage', () => {
  let component: BugPage;
  let fixture: ComponentFixture<BugPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BugPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
