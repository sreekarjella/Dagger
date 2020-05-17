import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailedMoviePage } from './detailed-movie.page';

describe('DetailedMoviePage', () => {
  let component: DetailedMoviePage;
  let fixture: ComponentFixture<DetailedMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedMoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
