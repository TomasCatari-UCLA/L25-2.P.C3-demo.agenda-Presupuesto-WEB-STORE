export interface iRegistro {
  tienda: string;
  ubicacion: string;
  repuesto: string;
  precio:number;
}
export default class Cl_mRegistro {
  private _tienda: string = "";
  private _ubicacion: string = "";
  private _repuesto: string = "";
  private _precio: number = 0;
  constructor({
    tienda,
    ubicacion,
    repuesto,
    precio,
  }: {
    tienda: string;
    ubicacion: string;
    repuesto: string;
    precio:number;
  }) {
    this.tienda = tienda;
    this.ubicacion = ubicacion;
    this.repuesto = repuesto;
    this.precio=precio;
  }
  set tienda(tienda: string) {
    this._tienda = tienda.toUpperCase();
  }
  get tienda(): string {
    return this._tienda;
  }
  set ubicacion(ubicacion: string) {
    this._ubicacion = ubicacion;
  }
  get ubicacion(): string {
    return this._ubicacion;
  }
  set repuesto(repuesto: string) {
    this._repuesto = repuesto;
  }
  get repuesto(): string {
    return this._repuesto;
  }
   set precio(precio: number) {
    this._precio = +precio;
  }
  get precio(): number {
    return this._precio;
  }
  error(): string | false {
    // Validar tienda
    if (this._tienda.length === 0 ) {return "El nombre de la tienda no puede estar vacío.";
    } 
    // Validar ubicación
    if (this._ubicacion.length === 0 ) { return "La ubicacion no puede estar vacia."; 
    }
    // validar repuesto
    if (this._repuesto.length === 0 ) { return "El nombre del repuesto no puede estar vacio";
     }
    // validar precio
    if (this._precio<=0 ) { return "El precio no puede ser igual o menor que 0 ";
     }
   else return false;
  }


  toJSON(): iRegistro {
    return {
      tienda: this._tienda,
      ubicacion: this._ubicacion,
      repuesto: this._repuesto,
      precio:this._precio
    };
  }
}
