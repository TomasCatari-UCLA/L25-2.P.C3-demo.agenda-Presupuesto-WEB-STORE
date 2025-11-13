import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php?v251110-2150";
import Cl_mRegistro, { iRegistro } from "./Cl_mRegistro.js";
interface iResultObjects {
  objects: [iRegistro] | null;
  error: string | false;
}
export default class Cl_mAgenda {
  private agenda: Cl_mRegistro[] = [];
  private db: Cl_dcytDb;
  readonly tbRegistro: string = "AgendaPresupuesto";

  constructor() {
    this.db = new Cl_dcytDb({ aliasCuenta: "THE CODE RANGERS" });
  }
  agregarRegistro({
    Registro,
    callback,
  }: {
    Registro: Cl_mRegistro;
    callback: (error: string | false) => void;
  }): void {
    // Validar que el registro no tenga errores
    let error = Registro.error();
    if (error) {
      callback(error);
      return;
    }
    // Agregar el Registro a la Web Storage
    this.db.addRecord({
      tabla: this.tbRegistro,
      object: Registro.toJSON(),
      callback: ({ id, objects, error }) => {
        if (!error) this.llenarAgenda(objects);
        callback?.(error);
      },
    });
  }
  cargar(callback: (error: string | false) => void): void {
    // Obtener los Registros desde la Web Storage
    this.db.listRecords({
      tabla: this.tbRegistro,
      callback: ({ objects, error }: iResultObjects) => {
        if (!error) this.llenarAgenda(objects || []);
        callback(false);
      },
    });
  }
  llenarAgenda(agenda: iRegistro[]) {
    this.agenda = [];
    agenda.map((Registro) => this.agenda.push(new Cl_mRegistro(Registro)));
  }
  listar(): iRegistro[] {
    return this.agenda.map((Registro) => Registro.toJSON());
  }
}
