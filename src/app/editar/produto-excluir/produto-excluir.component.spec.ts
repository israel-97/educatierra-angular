import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoExcluirComponent } from './produto-excluir.component';

describe('ProdutoExcluirComponent', () => {
  let component: ProdutoExcluirComponent;
  let fixture: ComponentFixture<ProdutoExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoExcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
