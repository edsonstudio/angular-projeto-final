import { ContaService } from './../services/conta.service';
import { Usuario } from './../models/usuario';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBaseComponent } from 'src/app/base-components/form-base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent extends FormBaseComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  loginForm: FormGroup;
  usuario: Usuario;

  errors: any[] = [];

  returnUrl: string;

  constructor(private fb: FormBuilder,
    private contaService: ContaService,
    private router: Router,
    private route: ActivatedRoute,
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
      }
    };

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    super.configurarMensagensValidacaoBase(this.validationMessages);
  }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, CustomValidators.rangeLength([6, 15])]]
    });
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormularioBase(this.formInputElements, this.loginForm);
  }

  login() {
    if (this.loginForm.dirty && this.loginForm.valid) {

      this.usuario = Object.assign({}, this.usuario, this.loginForm.value);

      this.contaService.login(this.usuario).subscribe(
        sucesso => { this.processarSucesso(sucesso) },
        falha => { this.processarFalha(falha) }
      );
    }
  }
  processarSucesso(response: any) {
    this.loginForm.reset();
    this.errors = [];
    this.contaService.LocalStorage.salvarDadosLocaisUsuario(response);

    let toastr = this.toastr.success('Login efetuado com Sucesso.', 'Seja bem vindo :D');
    if(toastr) {
      toastr.onHidden.subscribe(() => {
        this.returnUrl
        ? this.router.navigate([this.returnUrl])
        : this.router.navigate(['/home']);
      });
    }
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro !!!', 'Eita :O');
  }
}
