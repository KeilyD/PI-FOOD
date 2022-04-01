const { Router } = require('express');

const {Receta, Dieta} = require('../db');

const router = Router();

router.post('/recipes', async (req, res, next) =>{
    try {
        let {
            // id,
            nombre,
            resumen,
            puntuacion,
            saludable,
            instrucciones,
            imagen,
            // createdInDb,
            dieta
        } = req.body;
        console.log(dieta)
        let recetaCreada = await Receta.create ({
            // id,
            nombre: nombre,
            resumen: resumen,
            puntuacion: puntuacion,
            saludable: saludable,
            instruciones: instrucciones,
            imagen: imagen
            // createdInDb: createdInDb
        })
        
        
        let dietDb = await Dieta.findAll({
            where: {nombre: dieta}
        })
        console.log(dietDb)
        recetaCreada.addDieta(dietDb)
        res.status(200).send('Receta creada con éxitos')
    } catch (error) {
        console.log(error)
        next(error);
    }
   
})
module.exports = router;