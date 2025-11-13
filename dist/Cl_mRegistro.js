export default class Cl_mRegistro {
    constructor({ tienda, ubicacion, repuesto, precio, }) {
        this._tienda = "";
        this._ubicacion = "";
        this._repuesto = "";
        this._precio = 0;
        this.tienda = tienda;
        this.ubicacion = ubicacion;
        this.repuesto = repuesto;
        this.precio = precio;
    }
    set tienda(tienda) {
        this._tienda = tienda.toUpperCase();
    }
    get tienda() {
        return this._tienda;
    }
    set ubicacion(ubicacion) {
        this._ubicacion = ubicacion;
    }
    get ubicacion() {
        return this._ubicacion;
    }
    set repuesto(repuesto) {
        this._repuesto = repuesto;
    }
    get repuesto() {
        return this._repuesto;
    }
    set precio(precio) {
        this._precio = +precio;
    }
    get precio() {
        return this._precio;
    }
    error() {
        // Validar tienda
        if (this._tienda.length === 0) {
            return "El nombre de la tienda no puede estar vacío.";
        }
        // Validar ubicación
        if (this._ubicacion.length === 0) {
            return "La ubicacion no puede estar vacia.";
        }
        // validar repuesto
        if (this._repuesto.length === 0) {
            return "El nombre del repuesto no puede estar vacio";
        }
        // validar precio
        if (this._precio <= 0) {
            return "El precio no puede ser igual o menor que 0 ";
        }
        else
            return false;
    }
    toJSON() {
        return {
            tienda: this._tienda,
            ubicacion: this._ubicacion,
            repuesto: this._repuesto,
            precio: this._precio
        };
    }
}
