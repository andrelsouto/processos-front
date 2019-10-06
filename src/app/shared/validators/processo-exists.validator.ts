import { Directive, Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';

import { ProcessoService } from 'src/app/home/processos/processo.service';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProcessoExistsValidator implements AsyncValidator {

    constructor(private processoService: ProcessoService) { }

    validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

        return this.processoService.validateProcesso(c.value).pipe(
            map(processo => processo ? { processoExists: true } : null),
            catchError(e => null)
            );
        }
}

@Directive({
    selector: '[processoExists]',
    providers: [
        { provide: NG_ASYNC_VALIDATORS, useExisting: ProcessoExistsValidator, multi: true }
    ]
})
export class ProcessoExistsValidatorDirective {

    constructor(private validator: ProcessoExistsValidator) { }

    validate(c: AbstractControl) {

        return this.validator.validate(c);

    }
}
