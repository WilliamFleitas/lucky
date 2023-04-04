import { DataTypes } from "sequelize";

module.exports = (sequelize: any) => {
  sequelize.define(
    "TicketDetail",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      ticketNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 1000,
        }
      },
      ticketState: {
        type: DataTypes.ENUM("debt", "pay"),
        defaultValue: "debt"
      }
    },
    
    {
      timestamps: false,
      
    },
    
  );
};