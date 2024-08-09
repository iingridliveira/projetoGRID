import { Sequelize, DataTypes } from "sequelize";
import {sequelize as database} from "../database/connection.js";
import { text } from "express";


let letterEntity;
letterEntity = database.define("tb_letters", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    text: {
        type: DataTypes.TEXT(500),
        allowNull: false
    }


});



export {letterEntity}