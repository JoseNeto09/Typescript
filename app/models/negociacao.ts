export class Negociacao{
    #data;
    #quantidade;
    #valor;

    constructor(data, quatidade, valor){
        this.#data = data;
        this.#quantidade = quatidade;
        this.#valor = valor;
    }

    get data(){
        return this.#data;
    }

    get quantidade(){
        return this.#quantidade;
    }

    get valor(){
        return this.#valor;
    }

}