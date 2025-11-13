import { iRegistro } from "./Cl_mRegistro.js";
import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";

export default class Cl_vAgenda extends Cl_vGeneral {
  private btAgregarRegistro: HTMLButtonElement;
  private divRegistro: HTMLDivElement;
  constructor() {
    super({ formName: "agenda" });
    this.btAgregarRegistro = this.crearHTMLButtonElement("btAgregarRegistro", {
      onclick: () => this.agregarRegistro(),
    });
    this.divRegistro = this.crearHTMLElement("divRegistro",{type: tHTMLElement.CONTAINER, refresh: () => this.mostrarGruposRegistrados(),
      }
    ) as HTMLDivElement;
  }
  mostrarGruposRegistrados() {
    
    this.divRegistro.innerHTML = "";
    let agenda = this.controlador?.Registros();
    if (!agenda) return;
    agenda.forEach((Registro: iRegistro) => {
      this.divRegistro.innerHTML += `<tr>
            <td>${Registro.tienda}</td>
            <td>${Registro.ubicacion}</td>
            <td>${Registro.repuesto}</td>
            <td>${Registro.precio}$</td>
        </tr>`;
    });
  }
  agregarRegistro() {
    let tienda = prompt("Ingrese el nombre de la tienda :");
    if (!tienda) return;
    let ubicacion = prompt("Ingrese la ubicacion de la tienda:");
    if (!ubicacion) return;
    let repuesto = prompt("Ingrese el nombre del repuesto:");
    if (!repuesto) return;
    let precio = prompt("Ingrese el precio del repuesto:"); 
    if (!precio) return  ;
    this.controlador!.agregarRegistro({
      RegistroData: {
        tienda: tienda,
        ubicacion: ubicacion,
        repuesto: repuesto,
        precio:+precio,
      },
      callback: (error: string | false) => {
        if (error) alert(error);
        this.refresh();
      },
    });
  }
}
