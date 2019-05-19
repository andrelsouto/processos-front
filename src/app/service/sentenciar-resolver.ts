import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ProcessoService } from "../home/processos/processo.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SentenciarResolver implements Resolve<any> {

    constructor(private pService: ProcessoService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.pService.sentenciarProcessoQrCode(route.paramMap.get('numero'));
    }
}
