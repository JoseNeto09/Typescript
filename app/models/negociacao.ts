export class Negociacao{
    private _data;
    private _quantidade;
    private _valor;

    constructor(data, quatidade, valor){
        this._data = data;
        this._quantidade = quatidade;
        this._valor = valor;
    }

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

}