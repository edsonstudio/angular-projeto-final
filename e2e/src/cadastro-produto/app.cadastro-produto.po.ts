import { browser, by, element } from 'protractor';
import { AppPage } from '../app.po';
import * as path from "path";

export class AppProdutoPage extends AppPage {
    constructor() { super(); }

    navegarParaProdutos() {
        this.navegarPorLink('Produtos');
    }

    async navegarParaNovoProduto(): Promise<any> {
      return this.navegarPorLink('Novo Produto');
    }

    iniciarNavegacao() {
        this.navegarParaHome();
        this.login();
        this.navegarParaProdutos();
    }

    async obterTituloProdutos(): Promise<string> {
      return this.obterElementoXpath('/html/body/app-root/produto-app-root/app-lista/div/h1').getText();
    }

    selecionarFornecedor() {
        this.listaFornecedores.get(2).click();
    }

    listaFornecedores = element.all(by.tagName('option'));
    nome = element(by.id('nome'));
    descricao = element(by.id('descricao'));
    valor = element(by.id('valor'));
    ativo = element(by.id('ativo'));

    botaoProduto = element(by.id('cadastroProduto'));

    selecionarImagem() {
        let caminho = path.resolve(__dirname, 'imagem_teste.jpg');
        element(by.id('imagem')).sendKeys(caminho);
    }

}
