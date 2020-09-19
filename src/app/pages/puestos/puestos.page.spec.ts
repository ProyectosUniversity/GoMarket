import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PuestosPage } from './puestos.page';

describe('PuestosPage', () => {
  let component: PuestosPage;
  let fixture: ComponentFixture<PuestosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuestosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PuestosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
