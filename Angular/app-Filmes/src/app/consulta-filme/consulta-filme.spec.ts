import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ConsultaFilme } from './consulta-filme';
import { FilmeService } from '../filme-service';

describe('ConsultaFilme', () => {
  let component: ConsultaFilme;
  let fixture: ComponentFixture<ConsultaFilme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaFilme],
      providers: [
        {
          provide: FilmeService,
          useValue: {
            obterFilmes: () => of({ Response: 'True', Search: [] })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaFilme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
