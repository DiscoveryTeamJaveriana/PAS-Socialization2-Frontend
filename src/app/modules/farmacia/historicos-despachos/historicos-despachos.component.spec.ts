import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricosDespachosComponent } from './historicos-despachos.component';

describe('HistoricosDespachosComponent', () => {
  let component: HistoricosDespachosComponent;
  let fixture: ComponentFixture<HistoricosDespachosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricosDespachosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricosDespachosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
