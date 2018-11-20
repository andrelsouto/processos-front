export class Menu {

    private _active: boolean = false;

    constructor(private _descricao: string, private _rota: string){ }

    get descricao(): string {

        return this._descricao;
    }

    get rota(): string {

        return this._rota;
    }

    get active(): boolean {

        return this._active;
    }

    set active(active: boolean) {

        this._active = active;
    }
}
