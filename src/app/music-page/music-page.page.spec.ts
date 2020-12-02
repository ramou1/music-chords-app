import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicPagePage } from './music-page.page';

describe('MusicPagePage', () => {
  let component: MusicPagePage;
  let fixture: ComponentFixture<MusicPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
