import { LocalStorageUtils } from './../../utils/localstorage';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { NovoComponent } from '../novo/novo.component';

@Injectable()
export class FornecedorGuard implements CanActivate, CanDeactivate<NovoComponent> {

  localStorageUtils = new LocalStorageUtils();

  constructor(private router: Router) { }

  canDeactivate(component: NovoComponent) {
    if (component.mudancasNaoSalvas) {
      return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulario?');
    }
    return true
  }

  canActivate(routeAc: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (!this.localStorageUtils.obterTokenUsuario()) {
      this.router.navigate(['/conta/login']);
    }

    let user = this.localStorageUtils.obterUsuario();
    let claim: any = routeAc.data[0];

    if (claim !== undefined) {
      let claim = routeAc.data[0]['claim'];

      if (claim) {
        if (!user.claims) {
          this.navegarAcessoNegado();
        }

        let userClaims = user.claims.find(x => x.type === claim.nome);

        if (!userClaims) {
          this.navegarAcessoNegado();
        }

        let valoresClaim = userClaims.value as string; //cast para string

        if (!valoresClaim.includes(claim.valor)) {
          this.navegarAcessoNegado();
        }
      }
    }

    return true;
  }

  navegarAcessoNegado() {
    this.router.navigate(['/acesso-negado']);
  }
}
