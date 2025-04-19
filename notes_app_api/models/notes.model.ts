//model
import { Sequelize, DataTypes } from "sequelize";

export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "notes.db",
    logging: false,
});

export const Note = sequelize.define(
    "Note",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        author: DataTypes.STRING,
        message: DataTypes.STRING,
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: "notes",
        timestamps: false,
    }
);
