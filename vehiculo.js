class Vehiculo {
    constructor(marca,modelo) {
        this._marca=marca;
        this.modelo= modelo;
        this.encendido=false;
    }
    encender(){
        this.encendido=true;
        return `El ${this.marca} ${this.modelo} se ha encendido.`;
    }
    get marca(){
        return this._marca.toUpperCase();
    }
    set marca(x){
        if (x.trim() == ""){
            throw new Error("La marca es obligatoria ");
        }
        this._marca=x;
    }
}
export  class Coche extends Vehiculo{
    constructor(marca,modelo,puertas){
        super(marca,modelo);
        this.puertas=puertas;
    }
    tocarBocina(){
        return `¡Beep beep! ${this.marca} puertas: ${this.puertas} `;
    }
}