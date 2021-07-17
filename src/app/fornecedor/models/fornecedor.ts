import { Endereco } from './endereco';

export class Fornecedor {
    id: string;
    nome: string;
    documento: string;
    tipoFornecedor: number;
    endereco: Endereco;
    ativo: boolean;
}

