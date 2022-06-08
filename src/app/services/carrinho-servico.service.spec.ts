import { TestBed } from '@angular/core/testing';

import { CarrinhoServicoService } from './carrinho-servico.service';

describe('CarrinhoServicoService', () => {
  let service: CarrinhoServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrinhoServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
