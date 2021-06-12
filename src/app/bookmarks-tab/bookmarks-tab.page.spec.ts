import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookmarksTabPage } from './bookmarks-tab.page';

describe('BookmarksTabPage', () => {
  let component: BookmarksTabPage;
  let fixture: ComponentFixture<BookmarksTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookmarksTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
