import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewHousePage } from './new-house.page';

describe('NewHousePage', () => {
  let component: NewHousePage;
  let fixture: ComponentFixture<NewHousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHousePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewHousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
