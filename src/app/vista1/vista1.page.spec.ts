import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Vista1Page } from './vista1.page';

describe('Vista1Page', () => {
  let component: Vista1Page;
  let fixture: ComponentFixture<Vista1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vista1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Vista1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
