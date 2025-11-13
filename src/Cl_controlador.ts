import Cl_mRegistro, { iRegistro } from "./Cl_mRegistro.js";
import Cl_mAgenda from "./Cl_mAgenda.js";
import Cl_vAgenda from "./Cl_vAgenda.js";

export default class Cl_controlador {
  public modelo: Cl_mAgenda;
  public vista: Cl_vAgenda;
  constructor(modelo: Cl_mAgenda, vista: Cl_vAgenda) {
    this.modelo = modelo;
    this.vista = vista;
  }
  agregarRegistro({
    RegistroData,
    callback,
  }: {
    RegistroData: iRegistro;
    callback: Function;
  }): void {
    this.modelo.agregarRegistro({
      Registro: new Cl_mRegistro(RegistroData),
      callback: (error: string | false) => {
        callback(error);
      },
    });
  }
  Registros(): iRegistro[] {
    return this.modelo.listar();
  }
}


