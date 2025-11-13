
import Cl_controlador from "./Cl_controlador.js";
import Cl_mAgenda from "./Cl_mAgenda.js";
import Cl_vAgenda from "./Cl_vAgenda.js";

export default class Cl_index {
  constructor() { 
    let modelo = new Cl_mAgenda();
    modelo.cargar((error: string | false) => {
      if (error) alert(error);
      if (error) throw new Error(error);
    let vista = new Cl_vAgenda();
    let controlador = new Cl_controlador(modelo, vista);
    vista.controlador = controlador;
    vista.refresh();
  });
 }
}
