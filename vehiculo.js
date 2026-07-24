class Vehiculo {
    constructor(marca,modelo) {
        this.marca=marca;
        this.modelo= modelo;
        this.encendido=false;
    }
    encender(){
        this.encendido=true;
        return `El ${this.marca} ${this.modelo} se ha encendido.`;
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