import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeFiltroComponent } from './heroe-filtro.component';

describe('HeroeFiltroComponent', () => {
  let component: HeroeFiltroComponent;
  let fixture: ComponentFixture<HeroeFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroeFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
