const { Receta, Dieta } = require('../db');

async function traer_recetas_BD() {
       try {
           let recetas = await Receta.findAll({
               attributes: ['id', 'nombre', 'resumen', 'puntuacion', 'saludable', 'instruciones', 'imagen', ],
               include: {
                   model: Dieta,
                   attributes: ['name'],
                   through: {
                       attributes: []
                   }
               } 
           });
           console.log(recetas)
           return recetas
           
       } catch (error) {
           console.log(error)
       }
   

    

}
module.exports = {
    traer_recetas_BD
}