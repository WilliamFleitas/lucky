import { DataTypes } from "sequelize";

module.exports = (sequelize: any) => {
  sequelize.define(
    "Rifa",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      loot: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dateRifa: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    
    {
      timestamps: false,
      
    },
    
  );
};