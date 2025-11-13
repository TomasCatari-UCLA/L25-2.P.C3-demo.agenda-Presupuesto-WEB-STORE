import Cl_mRegistro from "./Cl_mRegistro.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarRegistro({ RegistroData, callback, }) {
        this.modelo.agregarRegistro({
            Registro: new Cl_mRegistro(RegistroData),
            callback: (error) => {
                callback(error);
            },
        });
    }
    Registros() {
        return this.modelo.listar();
    }
}
