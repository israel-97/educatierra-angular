import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsProdutoComponent } from './cards-produto.component';

describe('CardsProdutoComponent', () => {
  let component: CardsProdutoComponent;
  let fixture: ComponentFixture<CardsProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
