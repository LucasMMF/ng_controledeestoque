import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueConsultaComponent } from './estoque-consulta.component';

describe('EstoqueConsultaComponent', () => {
  let component: EstoqueConsultaComponent;
  let fixture: ComponentFixture<EstoqueConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstoqueConsultaComponent]
    });
    fixture = TestBed.createComponent(EstoqueConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
