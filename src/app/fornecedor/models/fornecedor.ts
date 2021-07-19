import { Produto } from './../../produto/models/produto';
import { Endereco } from './endereco';

export class Fornecedor {
    id: string;
    nome: string;
    documento: string;
    tipoFornecedor: number;
    endereco: Endereco;
    ativo: boolean;
    produtos: Produto[];
}

