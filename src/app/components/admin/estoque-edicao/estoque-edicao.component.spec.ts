import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueEdicaoComponent } from './estoque-edicao.component';

describe('EstoqueEdicaoComponent', () => {
  let component: EstoqueEdicaoComponent;
  let fixture: ComponentFixture<EstoqueEdicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstoqueEdicaoComponent]
    });
    fixture = TestBed.createComponent(EstoqueEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
