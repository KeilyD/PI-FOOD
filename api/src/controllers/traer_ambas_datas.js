
const {traer_recetas_api} = require('./traer_recetas_API');
const {traer_recetas_BD} = require('./traer_recetas_DB');


async function traer_ambas(){
    try {
        let recetas_api = await traer_recetas_api()
        let recetas_BD = await traer_recetas_BD()

        let recetas1 = recetas_BD.map(e => {

            return {
                id: e.id,
                nombre: e.nombre,
                resumen: e.resumen,
                puntuacion: e.puntuacion,
               saludable: e.saludable,
                dieta: e.dieta.map(e => e.name),
                instruciones: e.instruciones,
                imagen: e.imagen
            }
        })
        
        if(recetas_api){ // si existe receta consologueo
            console.log("se trajo las recetas de la api con exito")
        }
        
        let todaslasrecetas = []
        todaslasrecetas = todaslasrecetas.concat(recetas_api,recetas1)
        
        
        
        return todaslasrecetas

    } catch (error) {
        next(error)
        
    }
}

module.exports = {
    traer_ambas,
}
