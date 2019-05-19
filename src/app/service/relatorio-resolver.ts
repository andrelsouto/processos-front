import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { saveAs } from 'file-saver'

import { HomeService } from './home.service';

@Injectable({
    providedIn: 'root'
})
export class RelatorioResolver implements Resolve<any> {

    constructor(private homeService: HomeService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.homeService.downloadPdf().subscribe(
            relatorio => {
                let pdf = new Blob([relatorio], { type: 'application/pdf; attachement=contracheque.pdf' });
                saveAs(pdf, 'contracheque.pdf');
            }
        );

    }
}
