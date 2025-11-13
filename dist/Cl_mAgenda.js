import Cl_dcytDb from "https://gtplus.net/forms2/dcytDb/api/Cl_dcytDb.php?v251110-2150";
import Cl_mRegistro from "./Cl_mRegistro.js";
export default class Cl_mAgenda {
    constructor() {
        this.agenda = [];
        this.tbRegistro = "AgendaPresupuesto";
        this.db = new Cl_dcytDb({ aliasCuenta: "THE CODE RANGERS" });
    }
    agregarRegistro({ Registro, callback, }) {
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
                if (!error)
                    this.llenarAgenda(objects);
                callback === null || callback === void 0 ? void 0 : callback(error);
            },
        });
    }
    cargar(callback) {
        // Obtener los Registros desde la Web Storage
        this.db.listRecords({
            tabla: this.tbRegistro,
            callback: ({ objects, error }) => {
                if (!error)
                    this.llenarAgenda(objects || []);
                callback(false);
            },
        });
    }
    llenarAgenda(agenda) {
        this.agenda = [];
        agenda.map((Registro) => this.agenda.push(new Cl_mRegistro(Registro)));
    }
    listar() {
        return this.agenda.map((Registro) => Registro.toJSON());
    }
}
