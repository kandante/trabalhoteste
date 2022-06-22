export class Aviso{
    _id: number;
    _nome: string;
    _texto: string;
    _urgencia: boolean;
    _dataValidade: Date;
    //_horaValidade:  ;
    _setor: string;
    _periodo: string;
    _publicoAlvo: string;
    _identificacao: string;
    _dataCriacao: Date;
    //_horaCriacao: ;

    constructor(texto: string, urgencia: boolean, dataValidade: Date, horaValidade, setor: string, periodo: string, publicoAlvo: string, identificacao: string, dataCriacao: Date, horaCriacao){
        this._texto = texto;
        this._urgencia = urgencia;
        this._dataValidade = dataValidade;
        // this._horaValidade = horaValidade;
        this._setor = setor;
        this._periodo = periodo;
        this._publicoAlvo = publicoAlvo;
        this._identificacao = identificacao;
        this._dataCriacao = dataCriacao;
        //this._horaCriacao = horaCriacao;
    }

   
    setTexto(texto){
        this._texto = texto;
    }
    getTexto(){
        return this._texto;
    }
    setUrgencia(urgencia){
        this._urgencia = urgencia;
    }
    getUrgencia(){
        return this._urgencia;
    }
    setDataValidade(dataValidade){
        this._dataValidade = dataValidade;
    }
    getDataValidade(){
        return this._dataValidade;
    }
    setHoraValidade(horaValidade){
        //this._horaValidade = horaValidade;
    }
    getHoraValidade(){
    //    return this._horaValidade;
    }
    setSetor(setor){
        this._setor = setor;
    }
    getSetor(){
        return this._setor;
    }
    setPeriodo(periodo){
        this._periodo = periodo;
    }
    getPeriodo(){
        return this._periodo;
    }
    setPublicoAlvo(publicoAlvo){
        this._publicoAlvo = publicoAlvo;
    }
    getPublicAlvo(){
        return this._publicoAlvo;
    }
    setIdentificacao(identificacao){
        this._identificacao = identificacao;
    }
    getIdentificacao(){
        return this._identificacao;
    }
    setDataCriacao(dataCriacao){
        this._dataCriacao = dataCriacao;
    }
    getDataCriacao(){
        return this._dataCriacao;
    }
    setHoraCriacao(horaCriacao){
       // this._horaCriacao = horaCriacao;
    
    }
    getHoraCriacao(){
        //return this._horaCriacao;
    }
}