import { ContaService } from './../services/conta.service';
import { Usuario } from './../models/usuario';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBaseComponent } from 'src/app/base-components/form-base.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent extends FormBaseComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  cadastroForm: FormGroup;
  usuario: Usuario;

  errors: any[] = [];

  constructor(private fb: FormBuilder,
    private contaService: ContaService,
    private router: Router,
    private toastr: ToastrService) {

    super();

    this.validationMessages = {
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      password: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      confirmPassword: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    };

    super.configurarMensagensValidacaoBase(this.validationMessages);
  }

  ngOnInit(): void {

    let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
    let senhaConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(senha)]);

    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: senha,
      confirmPassword: senhaConfirm
    });
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormularioBase(this.formInputElements, this.cadastroForm);
  }

  adicionarConta() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {

      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);

      this.contaService.registrarUsuario(this.usuario).subscribe(
        sucesso => { this.processarSucesso(sucesso) },
        falha => { this.processarFalha(falha) }
      );

      this.mudancasNaoSalvas = false;
    }
  }
  processarSucesso(response: any) {
    this.cadastroForm.reset();
    this.errors = [];
    this.contaService.LocalStorage.salvarDadosLocaisUsuario(response);

    let toastr = this.toastr.success('Cadastro efetuado com Sucesso.', 'Seja bem vindo :D');
    if(toastr) {
      toastr.onHidden.subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro !!!', 'Eita :O');
  }
}
