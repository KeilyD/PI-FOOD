const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('receta', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resumen:{
      type: DataTypes.STRING
    },
    puntuacion:{
      type: DataTypes.INTEGER
    },
    saludable:{
      type: DataTypes.INTEGER 
    },
    instruciones:{
      type: DataTypes.TEXT
    },
    imagen:{
      type: DataTypes.TEXT
    },
   
  });
};
